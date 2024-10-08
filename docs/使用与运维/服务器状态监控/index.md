---
title: "服务器状态监控"
sidebar_position: 85
---

在pika的使用中，也为用户提供了丰富的info展示，用于监控服务器的运行状态。

1. 主从状态；
2. BinLog状态及配置；
3. 统计信息包括： 
4. clients状态；
    1. QPS
    2. 当前引擎内存使用；
5. db size、keyspace及状态；

info具体清单如下：
```
# Server
pika_version:1.0.5 ----------------------------------------------------------------- pika 版本信息
os:Linux 2.6.32-2.0.0.8-6 x86_64 --------------------------------------------------- 操作系统信息
arch_bits:64 ----------------------------------------------------------------------- 操作系统位数
process_id:12969 ------------------------------------------------------------------- pika pid信息
tcp_port:9001 ---------------------------------------------------------------------- pika 端口信息
thread_num:12 ---------------------------------------------------------------------- pika 线程数量
uptime_in_seconds:3074 ------------------------------------------------------------- pika 运行时间（秒）
uptime_in_days:0 ------------------------------------------------------------------- pika 运行时间（天）
config_file:/data1/pika9001/pika9001.conf ------------------------------------------ pika conf文件位置
is_bgsaving:No, , 0 ---------------------------------------------------------------- pika 备份信息：是否在备份,备份名称，备份执行时间
is_scaning_keyspace:No ------------------------------------------------------------- pika key space统计状态，是否在进行统计
is_compact:No ---------------------------------------------------------------------- 全量空洞回收（数据整理）是否正在进行
db_size:296M ----------------------------------------------------------------------- pika 当前db体积
log_size:22357M -------------------------------------------------------------------- pika 当前log总体积
compression:snappy ----------------------------------------------------------------- pika 当前压缩方案
safety_purge:write2file99546 ------------------------------------------------------- pika 当前能够安全清理的最新日志
expire_logs_days:7 ----------------------------------------------------------------- pika 日志过期时间
expire_logs_nums:200 --------------------------------------------------------------- pika 日志保留最大数量
 
# Clients
connected_clients:2 ---------------------------------------------------------------- 当前连接数
 
# Stats
total_connections_received:18 ------------------------------------------------------ 总连接次数统计
instantaneous_ops_per_sec:1 -------------------------------------------------------- 当前qps
accumulative_query_nums:633 -------------------------------------------------------- 请求总计
 
# Replication(MASTER)
role:master ------------------------------------------------------------------------ 本实例角色
connected_slaves:1 ----------------------------------------------------------------- 当前从库数量
slave0: host_port=192.168.1.1:57765 state=online ----------------------------------- 当前从库连接信息，如果有多个从库则依次展示
 
#从库（区别仅在于同步信息的展示）：
# Replication(SLAVE)
role:slave ------------------------------------------------------------------------- 本实例角色
master_host:192.168.1.2 ------------------------------------------------------------ 主库IP
master_port:9001 ------------------------------------------------------------------- 主库端口
master_link_status:up -------------------------------------------------------------- 当前同步状态
slave_read_only:1 ------------------------------------------------------------------ 从库是否readonly 
 
Keyspace（key数量展示，按照数据类型分类展示，默认不更新，仅在执行info keyspace 1的时候刷新该信息）
Time:2016-04-22 17:08:33 --------------------------------------------------------- 上一次统计的时间
kv   keys:43
hash keys:503
list keys:0
zset keys:0
set  keys:0
```