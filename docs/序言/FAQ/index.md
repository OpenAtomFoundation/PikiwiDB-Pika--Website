---
title: "FAQ"
sidebar_position: 3
---

### 1 编译安装

#### Q1: 支持的系统？
A1： 目前支持 Linux 和 MacOS 系统，不支持 Windows

#### Q2: 怎么编译安装？
A2： 参考编译安装 wiki

#### Q3： Ubuntu 编译偶尔报错 isnan isinf was not declared？
A3： 一些旧版本的 pika 对 Ubuntu 环境兼容不好，某些情况下会出现；可以先修改代码，用 std::isnan 和 std::isinf 替代 isnan，isinf, 并包含头文件 `#include <cmath>`。 我们会在新版兼容这个。

### 2 设计与实现

#### Q1: 为什么要开那么多线程？比如 purge，搞个定时任务不就好了。难道编程框架不支持定时器？
A1: pika 有一些比较耗时的任务，如删 binlog，扫描 key，备份，同步数据文件等等，为了不影响正常的用户请求，这些任务都是放到后台执行的，并且将能并行的都放到不同线程里来最大程度上提升后台任务的执行速度；你说的变成框架是 pink 吗？pink 是支持定时器的，每一个 workerthread 只要用户定义了 cronhandle 和频率，就会定时执行要执行的内容，不过这时候 worker 是被独占的，响应不了用户请求，所以占时的任务最好还是单独开线程去做，redis 的 bio 也是这个原因

#### Q2: heartbeat 让 sender 做不就好了？或者说 sender 有必要那么多线程吗？
A2: 这主要有两个原因，第一为了提高同步速度，sender 只发不收，receiver 只收不发，心跳是又单独的线程去做，如果心跳又 sender 来做，那么为了一秒仅有一次的心跳还要去复杂化 sender 和 receiver 的逻辑；第二其实前期尝试过合并在一起来进行连接级别的存活检测，当写入压力过大的时候会心跳包的收发会延后，导致存活检测被影响，slave 误判 master 超时而进行不必要的重连

#### Q3: nemo 存储 hash 的实际 key，第一个字节是？header？一个类型标记？是说他是个 hash 类型？
A3: 的确是一个 header，不过不是为了标记它是 hash，因为 nemo 底下已经将 string，hash，list，zset，set 这五个数据结构分成的 5 个库，互不影响，之所以有 header 是因为一个 hash 有一个 meta key 和一堆 field key，meta key 对应的 value 记录的是这个 hash 的基础信息，如 hash 的 size 等等，这个 header 也是区分 meta key 和 field key 用的

#### Q4: list 数据结构里面的 curr_seq 是个什么东西？
A4: list 的实现是完全基于 kv 实现的 list，通过 seq 来实现 list 类似 prev 和 next 指针，cur_seq 是在 meta 信息里的，也就是当前已经用到那个 seq 了，新来的节点从这个 seq 开始递增接着用

#### Q5: binlog 里面存储的是转化后的 put，delete？还是存储的原生 redis 命令？
A5: 存的是 redis 的命令

#### Q6: rsync 的 deamon 模式，这个 rsync 是 linux 上的 rsync 命令？
A6: 是的，pika 前期为了更快的实现全同步的功能，此处是直接调用 rsync 命令来完成数据文件的收发，也是由它来进行文件的续传校验等

#### Q7: dump db 文件是 rocksdb 本身就带的功能？具体怎么搞的？
A7: rocksdb 提供对当前 db 快照备份的功能，我们基于此，在 dump 时先对 pika 阻住用户的写，然后记录当前的 binlog 偏移量并且调用 rocksdb 的接口来拿到当前 db 的元信息，这个时候就可以放开用户写，然后基于这个元信息来进行快照数据的后台拷贝，阻写的时间很短

#### Q8: 先写 binlog 再执行，如果这时候挂了，命令还没执行，但是写入到 binlog 里面了怎么办？
A8: master 是先写 db 再写 binlog，之前 slave 只用一个 worker 来同步会在 master 写入压力很大的情况下由于 slave 一个 worker 写入太慢而造成同步差距过大，后来我们调整结构，让 slave 通过多个 worker 来写提高写入速度，不过这时候有一个问题，为了保证主从 binlog 顺序一致，写 binlog 的操作还是只能又一个线程来做，也就是 receiver，所以 slave 这边是先写 binlog 再写 db，所以 slave 存在写完 binlog 挂掉导致丢失数据的问题，不过 redis 在 master 写完 db 后挂掉同样会丢失数据，所以 redis 采用全同步的办法来解决这一问题，pika 同样，默认使用部分同步来继续，如果业务对数据十分敏感，此处可以强制 slave 重启后进行全同步即可

#### Q9: BinlogBGWorker 线程之间还是要按照 binlog 顺序执行，这块并发能提高多少性能？
A9: 之前主从同步的差异是由主的多个 worker 写入而从只有一个 worker 写入带来的，现在的做法提高了从写 db 的速度，不过协议解析还是有一个线程来做，还是有瓶颈，不过这样的优化主从同步的性能提高了 3~5 倍左右，如果 key 很少的话，优化不明显，因为 slave 这面是通过 key 的 hash 值来 sharding 到其中一个 worker 上的

#### Q10: 秒删，每次 put 都要去查询 key 的最新版本？也就是说每次写避免伴随一次读？
A10: pika 多数据结构的实现主要是 “meta key + 普通 key” 来实现的，所以对于多数据结构的读写，肯定都是对 rocksdb 进行 2 次及以上的读写次数，你说的版本信息我们是存在 meta_key 中的，和其他 meta 信息一起被读出来，其实并没有因为版本号而额外增加读写次数

#### Q11: 为什么 Pika 使用多线程而不是像 Redis 单线程的结构？
A11: 因为 Redis 所有的操作都是对于内存的操作，因此理论上 Redis 的每次操作很短的。

#### Q12: 数据分片是在代理层做的？集合操作落在不同的槽，比如 mget，是在代理层聚合的？
A12: 目前没有对数据进行分片，你可以理解成和单机 Redis 类似，支持 master-slave 的架构，因此单个 pika 实例存储的大小的限制是磁盘大小的限制。

#### Q13: pika 支持的客户端有哪些，是否支持 pipelining？
A13: pika 支持所有的 Redis 客户端，因为 pika 设计之初就考虑到了用户的迁移成本，因此各种语言的客户端都支持。pipelining 是客户端来做的，因此我们是支持 pipelining 的。

#### Q14: 为什么不考虑 Redis cluster shard 呢？
A14: 我们开始做 pika 的时候，Redis cluster shard 还不完善，而且 Redis cluster 定位的场景和 pika 还是有区别。目前我们内部还没大范围使用 Redis cluster。

#### Q15: 不理解前面为什么加 LVS？Redis 类服务都是带状态，负载反而用吧？
A15: 我们暴露给用户的 ip 是我们 LVS 的 ip。在 Redis 前面 LVS 是为了方便主从切换，这样可以做到用户完全不感知。这里 LVS 下面挂的多个 Redis 实例，都是 master-slave 结构的。

#### Q16: 有没有对比过 ssdb，LevelDB？优势是什么？
A16: 我们公司内部有业务部门用 ssdb，目前除了游戏大部分的 ssdb 已经迁移到 pika 上来。我觉得 pika 的优势在于我们代码实现的比较细，性能会比较好。

#### Q17: 存储引擎为什么没有选择 LevelDB 呢，另外市面上有类似的方案如 ssdb，有什么不同之处吗？
A17: 存储引擎上我们在 LevelDB，RocksDB 上面做过对比。LevelDB，RocksDB 在数据量比较小的时候性能差异不大，但是在数据量比较大的情况下，比如 200G 的时候，RocksDB 的性能会比 LevelDB 要来得好。但是 RocksDB 也有他的缺点，就是代码没有 LevelDB 来的那么优雅，我一直觉得一个好的 c++ 程序员看 LevelDB 代码和 effective c++ 就好了。

#### Q18: 若类似于单机 Redis，那么单机性能是个瓶颈吧？大量的客户端连接，命令处理，以及网卡流量等
A18: 是的。所以目前内部的 pika 的架构是支持一主多从、多机房自洽的方案。目前线上最多一个主 14 个从这样的结构。DBA 可以很容易的 slaveof 给一个主挂上 slave，然后进行数据的全同步过程。

#### Q19: pika 的多线程比 Redis 的全内存，在 get 上竟然快两倍？set 也快，不存在多线程的锁消耗吗？
A19: 这里大家可以看到，这个测试结果是 pika work thread 开了 18 个。

在多数据结构的接口里面 kv 的结构的性能是最好的，而多数据结构的接口比如 hash、zset 等等就算开了 18 个线程，性能依然不如 Redis 要来得好。因为 hash、zset 等数据结构需要有抢占多数据结构元数据锁的开销，因此性能很容易下来。但是 kv 接口基本没有锁的开销。唯一的锁开销就是 RocksDB 为了实现线程安全增加的锁，因此这个结果也是可以理解了。

#### Q20: 完全是因为分布式切片不均的缘故，而放弃分布式集群吗？m-s 架构每个节点不都是全量数据，占用更多资源吗？
A20: 其实我们在 bada 里面增加了多数据结构的接口，并且兼容了 Redis 的协议，但是后来用户的使用中，发现其实使用多数据结构接口的用户数据量其实不是特别大。单机 1T 的盘基本都能够承受下来。但是还是因为 Hash 分布式切片不均衡，导致我们的维护成本增加，因此我们去实现了 m-s 架构方案。

目前 bada 的方案也是和 pika 并存的方案，我们会根据用户具体的使用场景推荐使用的存储方案。我一直觉得肯定不是一套存储方案解决公司内部的所有需求，一定是某一个方案更适用于某一种存储方案。

#### Q21: 除了类比为单机 Redis 外，有没有考虑分布式支持？比如 Redis 的 sentinel 或者支持 Codis 这样可能其它 Redis 集群可以无缝迁移。
A21: Pika 目前并没有使用类似 Redis 的 sentinel，pika 前面是挂 LVS 来负责主从切换。目前也没有使用 Codis 这样的 proxy 方案。

#### Q22: 一主 14 个从？主从同步岂不是很慢？另外，从是只读的吧，读从的话，从的数据可能是过期的，数据一致性怎么解决？
A22: 一主 14 从的场景是用户的写入都是晚上定期的灌数据，读取的话从各个从库进行读取。因此这个数据一致性是用户可以接受的场景。

#### Q23: 设置了 expire-logs-nums (至少为 10) 和 binlog 过期时间，为何 master 中仍然有大量的 write2file 文件？
A23: pika 会定期检查 binlog 文件，如果 binlog 数目超过了 expire-logs-nums 或者过期时间，并且所有的从节点都已经对该 binlog 文件进行过同步，那么 binlog 文件就会被删除。确认过 expire-logs-nums 和过期时间设置正确，可以通过 info 命令查看是否有从节点同步延迟比较大，导致 binlog 无法被删除。

#### Q24:Pika 3.0 进行读写时，blackwidow 只对写加锁，对读不加锁，是否会发生脏读？
A24: 不会有脏读问题， Pika Blackwidow (最新代码在 src/storage) 进行 Get 操作使用的是 default_read_options_, snapshot 是 nullptr, 所以是调用时刻的隐式快照。更详细解释详见 [issue 185](https://github.com/OpenAtomFoundation/pika/issues/185#issuecomment-1548935380)。

如果您有其他问题，请联系直接在 github issue 上描述您的问题，我们第一时间回复。