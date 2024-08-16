---
title: "数据目录"
sidebar_position: 30
---

#### db目录
用于存放pika的所有数据文件，包含5个子目录（5大数据类型）它们是：kv，set，zset，hash，list，从pika3.0.0开始，这些数据结构目录为：hashes，lists，sets，strings，zsets
#### log目录
用于存放所有日志文件，包含：一般日志、警告日志、错误日志、同步日志（binlog）、同步日志节点信息文件（mainfest）
#### dump目录
用于存放快照式备份产生的文件
#### pid目录
用于存放pika的pid文件
#### dbsync目录
用于主从全量同步时存放全量同步所需的文件