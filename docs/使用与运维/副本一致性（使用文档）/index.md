---
title: "副本一致性（使用文档）"
sidebar_position: 100
---

### 简介
副本一致性提供主从副本在短时间内达到数据一致的功能。

具体请求流程如下：

1，客户端请求到主分片上

2，主分片同步请求到一定个数(replication-num)从分片上

3，主接收到一定个数（consensus-level）的从反馈ACK

4，数据落盘，返回客户端请求

### 注意

目前副本一致性功能只能在分片模式下运行。

由于成员变换的功能暂时不支持，不建议在主从关系建立之后更换新的从副本。


### 关于配置：

```c++
# replication num defines how many followers in a single raft group, only [0, 1, 2, 3, 4] is valid
replication-num : 0
# consensus level defines how many confirms does leader get, before commit this log to client,
#                 only [0, ...replicaiton-num] is valid
consensus-level : 0

```

replication-num 含义是在分片副本中，从副本的个数。目前可以配置的参数范围为[0, 1, 2, 3, 4]

consensus-level 含义在返回客户端之前需要有多少从确认已经收到了这一条日志。目前可以配置的参数范围为[0, ...replicaiton-num]

example:

a) 使用3个副本（1主2从）场景，希望主分片上收到2副本ACK之后再返回客户端。

replication-num: 2

consensus-level: 2

b) 使用3个副本（1主2从）场景，希望写入大多数副本，即希望主分片上收到1副本ACK之后再返回客户端。

replication-num: 2

consensus-level: 1

c) 默认场景不开启一致性，希望写入主副本之后立马返回客户端，采用异步同步的方式将LOG同步给从副本。

replication-num: 0

consensus-level: 0


### 关于切主：
在一些场景下，例如写大多数场景，不能保证主上面的新写入数据一定会马上同步到所有从上面。这时候主副本down了，需要管理员根据各个副本的日志状况选择切主。如果切主不当可能会造成数据丢失，同步异常等情况，请小心操作。

具体流程：

使用 pkcluster info slot 中查看各个从副本的分片日志信息，选择term 更大，或者term相同 index 更大的分片成为主。

example：

副本1 consensus_last_log=filenum: 9 offset: 65234985 term: 33 index: 998386

副本2 consensus_last_log=filenum: 9 offset: 65234985 term: 33 index: 998300

此时应该选择副本2为新主。管理员使用 pkcluster slotsslaveof ip port [0-3,8,9,10,11 | all] 命令可以进行切主操作。具体命令使用方法见[Pika分片命令](https://github.com/Qihoo360/pika/wiki/Pika%E5%88%86%E7%89%87%E5%91%BD%E4%BB%A4)

