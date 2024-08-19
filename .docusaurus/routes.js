import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b7e'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/Pika-3.5.0',
    component: ComponentCreator('/blog/Pika-3.5.0', 'eeb'),
    exact: true
  },
  {
    path: '/blog/Pika-3.5.0',
    component: ComponentCreator('/blog/Pika-3.5.0', '104'),
    exact: true
  },
  {
    path: '/blog/Pika-3.5.1',
    component: ComponentCreator('/blog/Pika-3.5.1', '780'),
    exact: true
  },
  {
    path: '/blog/Pika-3.5.3',
    component: ComponentCreator('/blog/Pika-3.5.3', 'f4a'),
    exact: true
  },
  {
    path: '/blog/Pika-3.5.4',
    component: ComponentCreator('/blog/Pika-3.5.4', '7a0'),
    exact: true
  },
  {
    path: '/blog/pika-blackwidow',
    component: ComponentCreator('/blog/pika-blackwidow', '396'),
    exact: true
  },
  {
    path: '/blog/Pika-Tools-Port-Bin',
    component: ComponentCreator('/blog/Pika-Tools-Port-Bin', 'dc3'),
    exact: true
  },
  {
    path: '/blog/PikiwiDB-Pika--4.0.0',
    component: ComponentCreator('/blog/PikiwiDB-Pika--4.0.0', 'c12'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c12'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'fcc'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '6ad'),
            routes: [
              {
                path: '/docs/使用与运维/',
                component: ComponentCreator('/docs/使用与运维/', '5f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/page info 信息说明/',
                component: ComponentCreator('/docs/使用与运维/page info 信息说明/', 'eef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/Pika 最佳实践/',
                component: ComponentCreator('/docs/使用与运维/Pika 最佳实践/', '5e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/分布式模式简单教程/',
                component: ComponentCreator('/docs/使用与运维/分布式模式简单教程/', '3df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/分片教程/',
                component: ComponentCreator('/docs/使用与运维/分片教程/', 'c6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/副本一致性（使用文档）/',
                component: ComponentCreator('/docs/使用与运维/副本一致性（使用文档）/', 'e86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/副本一致性（设计文档）/',
                component: ComponentCreator('/docs/使用与运维/副本一致性（设计文档）/', 'b1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/多库版命令/',
                component: ComponentCreator('/docs/使用与运维/多库版命令/', '3c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/安装使用/',
                component: ComponentCreator('/docs/使用与运维/安装使用/', '3a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/差异化命令/',
                component: ComponentCreator('/docs/使用与运维/差异化命令/', 'fcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/数据目录/',
                component: ComponentCreator('/docs/使用与运维/数据目录/', 'd15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/服务器状态监控/',
                component: ComponentCreator('/docs/使用与运维/服务器状态监控/', 'a79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/管理指令/',
                component: ComponentCreator('/docs/使用与运维/管理指令/', '0bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/自动容灾/',
                component: ComponentCreator('/docs/使用与运维/自动容灾/', '1d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/订阅/',
                component: ComponentCreator('/docs/使用与运维/订阅/', '18e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/配置文件说明/',
                component: ComponentCreator('/docs/使用与运维/配置文件说明/', '17b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/序言/',
                component: ComponentCreator('/docs/序言/', 'db5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/序言/FAQ/',
                component: ComponentCreator('/docs/序言/FAQ/', 'b59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/序言/支持的 Redis 接口与兼容情况/',
                component: ComponentCreator('/docs/序言/支持的 Redis 接口与兼容情况/', '10f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/序言/简介/',
                component: ComponentCreator('/docs/序言/简介/', '70a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/开发文档/',
                component: ComponentCreator('/docs/开发文档/', '7cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/开发文档/coding-style/',
                component: ComponentCreator('/docs/开发文档/coding-style/', '329'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/开发文档/编码规范/',
                component: ComponentCreator('/docs/开发文档/编码规范/', 'f7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/性能与优化/',
                component: ComponentCreator('/docs/性能与优化/', 'fd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/性能与优化/3.2.x 性能/',
                component: ComponentCreator('/docs/性能与优化/3.2.x 性能/', 'b31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/性能与优化/Pika 3.5 参数优化手册/',
                component: ComponentCreator('/docs/性能与优化/Pika 3.5 参数优化手册/', 'e0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/性能与优化/Pika 优化案例/',
                component: ComponentCreator('/docs/性能与优化/Pika 优化案例/', '088'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/性能与优化/Pika 优化案例/喜马拉雅 Redis 与 Pika 缓存使用军规/',
                component: ComponentCreator('/docs/性能与优化/Pika 优化案例/喜马拉雅 Redis 与 Pika 缓存使用军规/', '51b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/性能与优化/Pika 优化案例/调整 max-write-buffer-size 优化 pika 性能10倍的案例/',
                component: ComponentCreator('/docs/性能与优化/Pika 优化案例/调整 max-write-buffer-size 优化 pika 性能10倍的案例/', 'd3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/性能与优化/Pika 内存使用/',
                component: ComponentCreator('/docs/性能与优化/Pika 内存使用/', 'c7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/性能与优化/Redis 与 Pika scan 性能对比/',
                component: ComponentCreator('/docs/性能与优化/Redis 与 Pika scan 性能对比/', '601'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/',
                component: ComponentCreator('/docs/设计与实现/', '9ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/NoSQL 原理概述/',
                component: ComponentCreator('/docs/设计与实现/NoSQL 原理概述/', '472'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/Pika 与 Codis/',
                component: ComponentCreator('/docs/设计与实现/Pika 与 Codis/', 'f53'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/Pika 传火计划/',
                component: ComponentCreator('/docs/设计与实现/Pika 传火计划/', '2f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/Pika 传火计划/主从同步/',
                component: ComponentCreator('/docs/设计与实现/Pika 传火计划/主从同步/', '911'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/Pika 传火计划/线程模型/',
                component: ComponentCreator('/docs/设计与实现/Pika 传火计划/线程模型/', '6ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/Pika 传火计划/读写流程/',
                component: ComponentCreator('/docs/设计与实现/Pika 传火计划/读写流程/', '5dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/Pika 源码学习笔记/',
                component: ComponentCreator('/docs/设计与实现/Pika 源码学习笔记/', '48f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/Pika 源码学习笔记/Pika 和 RockSDB 的对接/',
                component: ComponentCreator('/docs/设计与实现/Pika 源码学习笔记/Pika 和 RockSDB 的对接/', '9cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/Pika 源码学习笔记/Pika 的命令执行框架/',
                component: ComponentCreator('/docs/设计与实现/Pika 源码学习笔记/Pika 的命令执行框架/', '26a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/Pika 源码学习笔记/PubSub 机制/',
                component: ComponentCreator('/docs/设计与实现/Pika 源码学习笔记/PubSub 机制/', 'e15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/Pika 源码学习笔记/通信和线程模型/',
                component: ComponentCreator('/docs/设计与实现/Pika 源码学习笔记/通信和线程模型/', 'a01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/主从同步/',
                component: ComponentCreator('/docs/设计与实现/主从同步/', '4d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/全同步/',
                component: ComponentCreator('/docs/设计与实现/全同步/', '248'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/副本一致性/',
                component: ComponentCreator('/docs/设计与实现/副本一致性/', '97a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/增量同步/',
                component: ComponentCreator('/docs/设计与实现/增量同步/', 'ea1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/快照式备份/',
                component: ComponentCreator('/docs/设计与实现/快照式备份/', '1e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/整体技术架构/',
                component: ComponentCreator('/docs/设计与实现/整体技术架构/', 'ccd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/新存储方案：详细解析/',
                component: ComponentCreator('/docs/设计与实现/新存储方案：详细解析/', '948'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/新存储结构/',
                component: ComponentCreator('/docs/设计与实现/新存储结构/', '571'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/旧存储结构/',
                component: ComponentCreator('/docs/设计与实现/旧存储结构/', 'f6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/线程模型/',
                component: ComponentCreator('/docs/设计与实现/线程模型/', '334'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/锁的应用/',
                component: ComponentCreator('/docs/设计与实现/锁的应用/', '581'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
