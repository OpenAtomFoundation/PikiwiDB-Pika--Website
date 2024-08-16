---
title: pika_port 迁移工具
slug: Pika-Tools-Port-Bin

authors:
  - name: 于雨
    title: Pika 开源社区
hide_table_of_contents: false
---

## 项目作者：
[AlexStocks](https://github.com/alexstocks)

## 适用版本：
3.1 和 2.x

## 项目地址：
[https://github.com/ipixiu/pika-tools](https://github.com/ipixiu/pika-tools)

[https://github.com/Axlgrep/pika-tools 长期维护地址需自行编译](https://github.com/Axlgrep/pika-tools)

## 二进制包：
[https://github.com/ipixiu/pika-port-bin](https://github.com/ipixiu/pika-port-bin)

## 功能：
将Pika中的数据在线迁移到Pika、Redis（支持全量、增量同步）

## 开发背景：
之前Pika项目官方提供的pika_to_redis工具仅支持离线将Pika的DB中的数据迁移到Pika、Redis, 且无法增量同步，该工具可以直接伪装为一个Pika的从库，将主库数据通过同步获取并转发给Pika、Redis，同时并支持增量同步


## 实现：
### trysync线程
1. 尝试与主库建立同步关系  
2. 如果需要全同步，则在接收到master的db之后，启动migrator和sender线程将db里面的数据发送给Pika、Redis  
3. 启动Slaveping线程定期给主库发送心跳，完成建立主从关系

### binlog_receiver线程
1. 接收主库发送过来的binlog并且将其解析成redis命令
2. 将redis命令转发给Pika、Redis

### migrator线程
1. 扫描不同数据类型的分库
2. 将key进行解析成响应数据Pika、redis指令
3. 将解析好的redis指令加载到sender的发送buf中

### sender线程
1. 从发送buf中读取数据，以非阻塞方式向Pika、redis发送数据
2. 接收Pika、redis返回的结果并解析，如果出现错误则显示错误结果

## 使用帮助：
```
Usage: 
       pika_port [-h] [-t local_ip -p local_port -i master_ip -o master_port
                  -m forward_ip -n forward_port -x forward_thread_num -y forward_passwd]
                  -f filenum -s offset -w password -r rsync_dump_path  -l log_path
        -h     -- show this help
        -t     -- local host ip(OPTIONAL default: 127.0.0.1)
        -p     -- local port(OPTIONAL)
        -i     -- master ip(OPTIONAL default: 127.0.0.1)
        -o     -- master port(REQUIRED)
        -m     -- forward ip(OPTIONAL default: 127.0.0.1)
        -n     -- forward port(REQUIRED)
        -x     -- forward thread num(OPTIONAL default: 1)
        -y     -- forward password(OPTIONAL)
        -f     -- binlog filenum(OPTIONAL default: local offset)
        -s     -- binlog offset(OPTIONAL default: local offset)
        -w     -- password for master(OPTIONAL)
        -r     -- rsync dump data path(OPTIONAL default: ./rsync_dump)
        -l     -- local log path(OPTIONAL default: ./log)
        -b     -- max batch number when port rsync dump data (OPTIONAL default: 512)
        -d     -- daemonize(OPTIONAL)
  example: ./pika_port -t 127.0.0.1 -p 12345 -i 127.0.0.1 -o 9221 -m 127.0.0.1 -n 6379 -x 7 -f 0 -s 0 -w abc -l ./log -r ./rsync_dump -b 512 -d
```

