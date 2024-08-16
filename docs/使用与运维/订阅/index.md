---
title: "订阅"
sidebar_position: 60
---

# Pika Pub/Sub文档

可用版本： >= 2.3.0

注意:	暂不支持键空间通知功能


## Pika 发布订阅命令
##### 以下为Pub/Sub发布订阅命令, 与Redis完全兼容

* PUBSUB subcommand [argument [argument ...]]
* PUBLISH channel message
* SUBSCRIBE channel [channel ...]
* PSUBSCRIBE pattern [pattern ...]
* UNSUBSCRIBE [channel [channel ...]]
* PUNSUBSCRIBE [pattern [pattern ...]]

#### 具体使用方法参考Redis的[Pub/Sub文档](http://redisdoc.com/topic/pubsub.html)

