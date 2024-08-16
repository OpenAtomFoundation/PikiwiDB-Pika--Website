---
title: "自动容灾"
sidebar_position: 70
---

pika能够配合Redis-sentinel(哨兵)实现自动容灾切主, 使用方式与redis完全一致  
需要注意的是, pika目前并无server-uuid, 但这并不会对哨兵的运行造成影响