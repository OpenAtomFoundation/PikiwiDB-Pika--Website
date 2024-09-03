"use strict";(self.webpackChunkPikiwiDB_Pika_=self.webpackChunkPikiwiDB_Pika_||[]).push([[4177],{4284:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(4848),s=t(8453);const o={title:"What's new in Pika v3.5.3 \uff08\u82f1\u6587\u7248\u672c\uff09",slug:"Pika-3.5.3-en",authors:[{name:"360 \u4e2d\u95f4\u4ef6\u56e2\u961f",title:"Pika \u5f00\u6e90\u793e\u533a"}],hide_table_of_contents:!1},a="What's New in PikiwiDB (Pika) v3.5.3 (Stable Release)",l={permalink:"/blog/Pika-3.5.3-en",source:"@site/blog/2024-03-27-Pika-3.5.3-en.md",title:"What's new in Pika v3.5.3 \uff08\u82f1\u6587\u7248\u672c\uff09",description:"As Redis announces the adoption of dual protocols to maintain its commercial interests, the PikiwiDB (Pika) community is pleased to announce the release of the v3.5.3 stable version for production use today.",date:"2024-03-27T00:00:00.000Z",tags:[],readingTime:8.965,hasTruncateMarker:!1,authors:[{name:"360 \u4e2d\u95f4\u4ef6\u56e2\u961f",title:"Pika \u5f00\u6e90\u793e\u533a"}],frontMatter:{title:"What's new in Pika v3.5.3 \uff08\u82f1\u6587\u7248\u672c\uff09",slug:"Pika-3.5.3-en",authors:[{name:"360 \u4e2d\u95f4\u4ef6\u56e2\u961f",title:"Pika \u5f00\u6e90\u793e\u533a"}],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"What's new in PikiwiDB(Pika) v3.5.4",permalink:"/blog/Pika-3.5.4"},nextItem:{title:"What's new in Pika v3.5.3 ",permalink:"/blog/Pika-3.5.3"}},r={authorsImageUrls:[void 0]},p=[{value:"1 Major Improvements",id:"1-major-improvements",level:2},{value:"1.1 PikiwiDB (Pika) Supports ACL",id:"11-pikiwidb-pika-supports-acl",level:3},{value:"1.2 Hybrid Storage Model Supports Bitmap",id:"12-hybrid-storage-model-supports-bitmap",level:3},{value:"1.3 Separation of Fast and Slow Commands",id:"13-separation-of-fast-and-slow-commands",level:3},{value:"1.4 Redis Stream",id:"14-redis-stream",level:3},{value:"1.5 Cloud-Native Cluster",id:"15-cloud-native-cluster",level:3},{value:"1.6 Compaction Improvements",id:"16-compaction-improvements",level:3},{value:"1.7 Automatic Failover",id:"17-automatic-failover",level:3},{value:"1.8 Observability Enhancements",id:"18-observability-enhancements",level:3},{value:"1.9 Data Consistency",id:"19-data-consistency",level:3},{value:"1.10 Test Suite Additions",id:"110-test-suite-additions",level:3},{value:"1.11 Toolkit Additions",id:"111-toolkit-additions",level:3},{value:"1.12 Documentation Updates",id:"112-documentation-updates",level:3},{value:"2 Release Improvements",id:"2-release-improvements",level:2},{value:"2.1 New Features",id:"21-new-features",level:3},{value:"2.2 Bug Fixes",id:"22-bug-fixes",level:3},{value:"2.3 Release Tag",id:"23-release-tag",level:3},{value:"3 Community",id:"3-community",level:2}];function h(e){const i={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"As Redis announces the adoption of dual protocols to maintain its commercial interests, the PikiwiDB (Pika) community is pleased to announce the release of the v3.5.3 stable version for production use today."}),"\n",(0,n.jsx)(i.p,{children:"The v3.5.3 version addresses historical bugs and introduces a multitude of new features. These features primarily include Pika's support for ACL, the removal of residual Slot code from the Sharing mode, separation of fast and slow commands, Redis Stream support, large key analysis tools, and Pika's distributed cluster support for fully automated failover, among others. Additionally, we have enriched the automation test cases in version 3.5.3 to enhance the stability and robustness of the Pika service, providing users with a more efficient and stable experience. This article will mainly elaborate on the significant features, bug fixes, and performance improvements in this update."}),"\n",(0,n.jsx)(i.p,{children:"Before diving into the main release content of version 3.5.3, please note the following statements:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Due to trademark issues, the Pika project has been renamed to PikiwiDB. In this article, we will use PikiwiDB (Pika) to refer to the project at ",(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika",children:"https://github.com/OpenAtomFoundation/pika"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["We have created a new project ",(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pikiwidb",children:"https://github.com/OpenAtomFoundation/pikiwidb"}),", which is a large-capacity KV database compatible with the Redis protocol and based on the Raft protocol. It is mainly designed for scenarios requiring strong consistency, such as storing metadata at a scale of about 10TiB. PikiwiDB will be used to refer to this project specifically."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"1-major-improvements",children:"1 Major Improvements"}),"\n",(0,n.jsx)(i.h3,{id:"11-pikiwidb-pika-supports-acl",children:"1.1 PikiwiDB (Pika) Supports ACL"}),"\n",(0,n.jsx)(i.p,{children:"PikiwiDB (Pika) 3.5.3 now fully supports Redis ACL, laying a solid foundation for future multi-tenant support in cloud-native Pika clusters. Before 3.5.3, Pika already supported Redis user authentication methods such as auth/userpass/requirepass, as well as its own command blacklist mode configured through userblacklist in pika.conf. This update maintains backward compatibility and supports these existing methods."}),"\n",(0,n.jsx)(i.p,{children:"Moreover, we have integrated all Redis ACL TCL test suites into PikiwiDB (Pika)'s test suite to ensure that PikiwiDB (Pika)'s ACL implementation is fully compatible with Redis ACL."}),"\n",(0,n.jsx)(i.p,{children:"Key PRs:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2013",children:"PikiwiDB (Pika) Supports ACL"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2449",children:"Fixes ACL User Authentication Issues"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2459",children:"ACL Backward Compatibility with Userblacklist"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2495",children:"Adds Redis ACL Test Suites"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"12-hybrid-storage-model-supports-bitmap",children:"1.2 Hybrid Storage Model Supports Bitmap"}),"\n",(0,n.jsxs)(i.p,{children:['In a single-node environment, it is impossible to simultaneously optimize PikiwiDB (Pika)\'s read/write/compaction, which is known as the "impossible triangle." In version v3.5.2, we supported hybrid storage consisting of cached Redis and RocksDB, which supported five data structures: string/list/set/zset/hashtable. In this release, we have added support for bitmap: ',(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2253",children:"https://github.com/OpenAtomFoundation/pika/pull/2253"})]}),"\n",(0,n.jsxs)(i.p,{children:["Additionally, we now support dynamic tuning of Redis cache parameters in version 3.5.3: ",(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2197",children:"https://github.com/OpenAtomFoundation/pika/pull/2197"})]}),"\n",(0,n.jsx)(i.h3,{id:"13-separation-of-fast-and-slow-commands",children:"1.3 Separation of Fast and Slow Commands"}),"\n",(0,n.jsx)(i.p,{children:"To prevent slow commands from blocking the execution of fast commands, we have implemented the separation of fast and slow commands at both the Codis-Proxy and PikiwiDB (Pika) levels."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2162",children:"https://github.com/OpenAtomFoundation/pika/pull/2162"})}),"\n",(0,n.jsx)(i.h3,{id:"14-redis-stream",children:"1.4 Redis Stream"}),"\n",(0,n.jsx)(i.p,{children:"While PikiwiDB (Pika) previously supported Redis pubsub, which only allowed for online message passing, in version 3.5.3, we have added limited support for Redis Stream, similar to a message queue (MQ), to facilitate safer message transmission. To ensure data safety, we have specifically added support for the Stream data type in our underlying engine, BlackWidow."}),"\n",(0,n.jsx)(i.p,{children:"Key PR:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1955",children:"Pika Supports Redis Stream"})}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Please note that Pika Stream currently does not support consumer group consumption and will be available in future updates."}),"\n",(0,n.jsx)(i.h3,{id:"15-cloud-native-cluster",children:"1.5 Cloud-Native Cluster"}),"\n",(0,n.jsx)(i.p,{children:"In PikiwiDB (Pika) 3.5.0, we open-sourced a Pika-Operator that supports deploying a pair of Pika master and slave on K8s. In version 3.5.2, based on Kubeblocks, our Pika-Operator supported deploying a Pika Cluster in the form of Codis on K8s, but it did not support dynamic scaling at the time."}),"\n",(0,n.jsx)(i.p,{children:"In version 3.5.3, the latest Pika-Operator now supports node scaling at the Codis Group level and data rebalance."}),"\n",(0,n.jsx)(i.p,{children:"Key PRs:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2121",children:"PikiwiDB (Pika) Operator Supports Pika Cluster Auto-Scaling"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2486",children:"Optimizes Codis Slot Migration Speed, Supports Dynamic Adjustment of Migration Threads and Speed"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2480",children:"Pika-Operator Supports Namespaces, Allows Deploying Different Clusters in Different Namespaces"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2451",children:"Pika-Operator Supports Monitoring Metric Collection, Automatically Launches Pika-Exporter"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"16-compaction-improvements",children:"1.6 Compaction Improvements"}),"\n",(0,n.jsx)(i.p,{children:"PikiwiDB (Pika)'s underlying disk storage engine, RocksDB, significantly impacts PikiwiDB (Pika)'s read and write performance during compaction, which appears as \"spikes\" in monitoring systems. Controlling compaction is key to optimizing Pika's read and write performance."}),"\n",(0,n.jsx)(i.p,{children:"Key PRs for compaction improvements:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2163",children:"Adds CompactRange Command to Support Compaction of a Specific Range of Keys"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2172",children:"Improves Compaction Speed and Reduces Compaction Time"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2345",children:"Invokes Disable Compaction When Executing Shutdown Command, Enhances Exit Speed"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"17-automatic-failover",children:"1.7 Automatic Failover"}),"\n",(0,n.jsx)(i.p,{children:"PikiwiDB (Pika) clusters are currently based on Codis. To enhance the usability of PikiwiDB (Pika) Clusters based on Codis, we have made many extensions to Codis."}),"\n",(0,n.jsx)(i.p,{children:"The original Codis did not support failover within Groups, requiring the use of Redis Sentinel, which increases operational costs. We have implemented auto failover for Groups within Codis Dashboard by drawing on the functionality of sentinel."}),"\n",(0,n.jsx)(i.p,{children:"Key PR:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2386",children:"PikiwiDB (Pika) Distributed Cluster Supports Automatic Failover"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"18-observability-enhancements",children:"1.8 Observability Enhancements"}),"\n",(0,n.jsx)(i.p,{children:"The key component for PikiwiDB (Pika) observability is Pika-Exporter. Although Redis Cache was added to the 3.5.2 version, it lacked monitoring metrics. In version 3.5.3, we have added metrics such as hit rate, hits per second, Redis Cache memory usage, number of Redis Caches, and number of Redis Cache DBs."}),"\n",(0,n.jsx)(i.p,{children:"Key PRs:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2318",children:"Pika Exporter Exposes Cache-Related Data Collection Metrics"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2199",children:"PikiwiDB (Pika) Distributed Cluster Codis Proxy Adds Observable Metrics"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2494",children:"Fixes dbsize Calculation Error"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2234",children:"Fixes Inaccurate Network Monitoring Metric Statistics"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"19-data-consistency",children:"1.9 Data Consistency"}),"\n",(0,n.jsx)(i.p,{children:"Version 3.5.3 fixes numerous PikiwiDB (Pika) master-slave synchronization issues, ensuring data consistency."}),"\n",(0,n.jsx)(i.p,{children:"Key PRs:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2319",children:"Fixes the Logic for Slave Nodes Receiving Exceptional Reply Packets from Masters During Full-Quantity Replication"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2225",children:"Fixes Inconsistency Issues Between Cache and DB Data in Certain Scenarios"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2439",children:"Fixes Data Loss Issues After Full-Quantity Replication Failure"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2430",children:"Adds Data Synchronization Status During Full-Quantity Replication, Clarifying Data Synchronization Progress"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2437",children:"Fixes the Issue of No Proper Response to Slave Synchronization Requests During Master Instance bgsave Execution"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2409",children:"Fixes Data Inconsistency Issues When Applying Binlog on Slave Instances Without Locking the Operated Key"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2485",children:"Fixes Data Inconsistency Issues After Data Migration"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"110-test-suite-additions",children:"1.10 Test Suite Additions"}),"\n",(0,n.jsx)(i.p,{children:"The PikiwiDB (Pika) test suite consists of gtest unit tests, Redis TCL test suites, and Go test suites. In 3.5.3, we have added Codis cluster e2e tests."}),"\n",(0,n.jsx)(i.p,{children:"Key PRs:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2497",children:"Pika TCL Test Suite"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2502",children:"Pika Gotest Test Suite"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"111-toolkit-additions",children:"1.11 Toolkit Additions"}),"\n",(0,n.jsxs)(i.p,{children:["PikiwiDB (Pika) has always valued the construction of toolkits, and all related tools can be found at ",(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/tree/unstable/tools",children:"https://github.com/OpenAtomFoundation/pika/tree/unstable/tools"}),". In 3.5.3, we have added a new tool:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2195",children:"PikiwiDB (Pika) Supports Large Key Analysis Tools"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"112-documentation-updates",children:"1.12 Documentation Updates"}),"\n",(0,n.jsx)(i.p,{children:"The PikiwiDB (Pika) documentation mainly consists of wiki documentation. In 3.5.3, we have updated the documentation for the Redis commands supported by Pika."}),"\n",(0,n.jsxs)(i.p,{children:["Documentation link: ",(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/wiki/Pika-Supports-Redis-Interface-and-Content-Situation",children:"https://github.com/OpenAtomFoundation/pika/wiki/Pika-Supports-Redis-Interface-and-Content-Situation"})]}),"\n",(0,n.jsx)(i.h2,{id:"2-release-improvements",children:"2 Release Improvements"}),"\n",(0,n.jsx)(i.p,{children:"In the first chapter, we described the main feature upgrades and improvements of version 3.5.3. Below is a detailed list of the relevant PRs for this release."}),"\n",(0,n.jsx)(i.h3,{id:"21-new-features",children:"2.1 New Features"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2013",children:"Pika Supports ACL"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2197",children:"During Full-Quantity Replication, Pika Slave Nodes Do Not Accept Read Requests"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2251",children:"Removes Residual Slot Code from Sharing Mode, Returns to v3.0, Where One Pika Instance Has Multiple DBs, Each with Only One Blackwidow"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2349",children:"Automatically Recovers Service When Codis Dashboard Coroutine Panics"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2253",children:"Pika Cache Adds New Bitmap Data Type"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2162",children:"Pika Supports Separation of Fast and Slow Commands"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2318",children:"Pika Exporter Exposes Cache-Related Data Collection Metrics"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2167",children:"Pika Keeps Unix Timepoint After Completing Bgsave"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2257",children:"Pika Supports Dynamic Configuration of disable_auto_compations Parameter"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1955",children:"Pika Supports Redis Stream"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2195",children:"Pika Supports Large Key Analysis Tools"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2197",children:"Pika Supports Dynamic Adjustment of Pika Cache Parameters"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2222",children:"Updates Pika Benchmark Tool to Support More Interface Pressure Tests"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2121",children:"Pika Operator Supports Pika Cluster Auto-Scaling"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2163",children:"Adds CompactRange Command to Support Compaction of a Specific Range of Keys"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2172",children:"Improves Compaction Speed and Reduces Compaction Time"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2157",children:"Upgrades RocksDB Version to v8.7.3"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2199",children:"PikiwiDB (Pika) Distributed Cluster Codis Proxy Adds Observable Metrics"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2386",children:"PikiwiDB (Pika) Distributed Cluster Supports Automatic Failover"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2455",children:"Pika Supports Redis rename-command Feature"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2486",children:"Optimizes Codis Slot Migration Speed, Supports Dynamic Adjustment of Migration Threads and Speed"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2434",children:"PikiwiDB (Pika) Supports Dynamic Adjustment of max-conn-rbuf-size Parameter"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2480",children:"Pika-Operator Supports Namespaces, Allows Deploying Different Clusters in Different Namespaces"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2451",children:"Pika-Operator Supports Monitoring Metric Collection, Automatically Launches Pika-Exporter"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2459",children:"ACL Backward Compatibility with Userblacklist"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2497",children:"Enriches Pika TCL Test Suite"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2502",children:"Enriches Pika Gotest Test Suite"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"22-bug-fixes",children:"2.2 Bug Fixes"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2377",children:"Fixes Issue of Incorrect Deletion of Dump Files During Full-Quantity Replication by Pika Slave Nodes"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2319",children:"Fixes the Logic for Slave Nodes Receiving Exceptional Reply Packets from Masters During Full-Quantity Replication"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2345",children:"Invokes Disable Compaction When Executing Shutdown Command, Enhances Exit Speed"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2337",children:"Fixes Inaccurate Redis Memory Values in Codis-Dashboard"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2197",children:"Optimizes INFO Command Latency, Reduces Frequency of Checking Disk Usage"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2186",children:"Fixes Issue of Rsync Deleting Temporary Files with Incorrect Path, Leading to Failure in Opening RocksDB"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2194",children:"Fixes Issue of Commands Not Specifying DB Name, Leading to Coredump of Some Commands"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2198",children:"Uses info replication Command in Codis Dashboard Instead of info Command to Query Master IP, Reducing Performance Impact on Pika"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2225",children:"Fixes Inconsistency Issues Between Cache and DB Data in Certain Scenarios"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2265",children:"Fixes Issue of Segmentation Fault When Dump Directory is Empty"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2217",children:"Fixes Issue of Certain Commands' Cache Not Taking Effect Due to Incorrect Flag Calculation"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2249",children:"Fixes Issue of Slave Instances Being Inaccessible Due to Deadlock After Master Instance flushdb in Master-Slave Replication Mode"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2187",children:"Fixes Issue of Commands Not Judging the Return Value of RocksDB"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2176",children:"Standardizes Function Return Values and Initial Values"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2234",children:"Fixes Inaccurate Network Monitoring Metric Statistics"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2218",children:"Fixes Issue of Abnormal Parameters When Loading Configuration File"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2393",children:"Fixes 100% CPU Usage Issue in Codis Dashboard"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2387",children:"Fixes Issue of Abnormal Display of Pika Master-Slave Roles in Codis Front End"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2485",children:"Fixes Data Inconsistency Issues After Data Migration"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2475",children:"Fixes Issue of Inaccurate Display in Codis-dashboard After Scaling or Pod Start/Stop"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2372",children:"Fixes Issue of Repeated Locking at the DB Level"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2439",children:"Fixes Issue of Data Loss After Full-Quantity Replication Failure"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2437",children:"Fixes Issue of No Proper Response to Slave Synchronization Requests During Master Instance bgsave Execution"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2430",children:"Adds Data Synchronization Status During Full-Quantity Replication, Clarifying Data Synchronization Progress"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2409",children:"Fixes Issue of No Locking of Operated Key When Applying Binlog on Slave Instances, Leading to Data Inconsistency"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2415",children:"Fixes Issue of Master Instance Coredump During Codis Slot Migration"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2377",children:"Fixes Issue of Deleting Dump Files in Use During Master-Slave Replication"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2319",children:"Fixes Issue of Rsync Response Errors from Slave Instances During Master-Slave Replication"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"23-release-tag",children:"2.3 Release Tag"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/OpenAtomFoundation/pika/releases/tag/v3.5.3",children:"PikiwiDB (Pika) v3.5.3 Release Tag"})}),"\n",(0,n.jsx)(i.h2,{id:"3-community",children:"3 Community"}),"\n",(0,n.jsx)(i.p,{children:"If you have any questions, feel free to join our community discussion group. The PikiwiDB (Pika) open-source community appreciates your support and help."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["telegram ",(0,n.jsx)(i.a,{href:"https://t.me/+gMlTzNacOF1iMTM1",children:"https://t.me/+gMlTzNacOF1iMTM1"})]}),"\n",(0,n.jsx)(i.li,{children:'WeChat Assistant "PikiwiDB"'}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>l});var n=t(6540);const s={},o=n.createContext(s);function a(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);