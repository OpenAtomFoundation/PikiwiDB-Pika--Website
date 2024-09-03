"use strict";(self.webpackChunkPikiwiDB_Pika_=self.webpackChunkPikiwiDB_Pika_||[]).push([[4196],{1234:(i,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>r,frontMatter:()=>h,metadata:()=>o,toc:()=>p});var t=e(4848),l=e(8453);const h={title:"What's new in Pika v3.5.3 ",slug:"Pika-3.5.3",authors:[{name:"360 \u4e2d\u95f4\u4ef6\u56e2\u961f",title:"Pika \u5f00\u6e90\u793e\u533a"}],hide_table_of_contents:!1},a=void 0,o={permalink:"/blog/Pika-3.5.3",source:"@site/blog/2024-03-27-Pika-3.5.3.md",title:"What's new in Pika v3.5.3 ",description:"\u968f\u7740 Redis \u5ba3\u5e03\u91c7\u7528\u53cc\u534f\u8bae\u4ee5\u7ef4\u62a4\u5176\u5546\u4e1a\u5229\u76ca\uff0cPikiwiDB(Pika) \u793e\u533a\u975e\u5e38\u8363\u5e78\u5730\u5ba3\u5e03\u4e4b\u9645\uff0c\u6211\u4eec\u7684\u6700\u65b0 v3.5.3 \u6b63\u5f0f\u751f\u4ea7\u53ef\u7528\u7248\u672c\u73b0\u5df2\u53d1\u5e03\u3002",date:"2024-03-27T00:00:00.000Z",tags:[],readingTime:14.775,hasTruncateMarker:!1,authors:[{name:"360 \u4e2d\u95f4\u4ef6\u56e2\u961f",title:"Pika \u5f00\u6e90\u793e\u533a"}],frontMatter:{title:"What's new in Pika v3.5.3 ",slug:"Pika-3.5.3",authors:[{name:"360 \u4e2d\u95f4\u4ef6\u56e2\u961f",title:"Pika \u5f00\u6e90\u793e\u533a"}],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"What's new in Pika v3.5.3 \uff08\u82f1\u6587\u7248\u672c\uff09",permalink:"/blog/Pika-3.5.3-en"},nextItem:{title:"What's new in Pika v3.5.2",permalink:"/blog/Pika-3.5.2"}},s={authorsImageUrls:[void 0]},p=[{value:"1 \u4e3b\u8981\u66f4\u65b0",id:"1-\u4e3b\u8981\u66f4\u65b0",level:2},{value:"1.1 \u652f\u6301 ACL",id:"11-\u652f\u6301-acl",level:3},{value:"1.2 \u6df7\u5408\u5b58\u50a8\u6a21\u578b\u652f\u6301 bitmap",id:"12-\u6df7\u5408\u5b58\u50a8\u6a21\u578b\u652f\u6301-bitmap",level:3},{value:"1.3 \u5feb\u6162\u547d\u4ee4\u5206\u79bb",id:"13-\u5feb\u6162\u547d\u4ee4\u5206\u79bb",level:3},{value:"1.4 Redis Stream \u652f\u6301",id:"14-redis-stream-\u652f\u6301",level:3},{value:"1.5 \u4e91\u539f\u751f\u96c6\u7fa4",id:"15-\u4e91\u539f\u751f\u96c6\u7fa4",level:3},{value:"1.6 Compaction \u4f18\u5316",id:"16-compaction-\u4f18\u5316",level:3},{value:"1.7 \u81ea\u52a8 Failover",id:"17-\u81ea\u52a8-failover",level:3},{value:"1.8 \u53ef\u89c2\u6d4b\u6027\u63d0\u5347",id:"18-\u53ef\u89c2\u6d4b\u6027\u63d0\u5347",level:3},{value:"1.9 \u6570\u636e\u4e00\u81f4\u6027",id:"19-\u6570\u636e\u4e00\u81f4\u6027",level:3},{value:"1.10 \u6d4b\u8bd5\u96c6\u589e\u52a0",id:"110-\u6d4b\u8bd5\u96c6\u589e\u52a0",level:3},{value:"1.11 \u5de5\u5177\u96c6\u66f4\u65b0",id:"111-\u5de5\u5177\u96c6\u66f4\u65b0",level:3},{value:"1.12 \u6587\u6863\u66f4\u65b0",id:"112-\u6587\u6863\u66f4\u65b0",level:3},{value:"2 \u53d1\u7248\u8be6\u60c5",id:"2-\u53d1\u7248\u8be6\u60c5",level:2},{value:"2.1 \u65b0\u7279\u6027",id:"21-\u65b0\u7279\u6027",level:3},{value:"2.2 Bug \u4fee\u590d",id:"22-bug-\u4fee\u590d",level:3},{value:"2.3 \u53d1\u7248\u6807\u7b7e",id:"23-\u53d1\u7248\u6807\u7b7e",level:3},{value:"3 \u793e\u533a",id:"3-\u793e\u533a",level:2}];function d(i){const n={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,l.R)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u968f\u7740 Redis \u5ba3\u5e03\u91c7\u7528\u53cc\u534f\u8bae\u4ee5\u7ef4\u62a4\u5176\u5546\u4e1a\u5229\u76ca\uff0cPikiwiDB(Pika) \u793e\u533a\u975e\u5e38\u8363\u5e78\u5730\u5ba3\u5e03\u4e4b\u9645\uff0c\u6211\u4eec\u7684\u6700\u65b0 v3.5.3 \u6b63\u5f0f\u751f\u4ea7\u53ef\u7528\u7248\u672c\u73b0\u5df2\u53d1\u5e03\u3002"}),"\n",(0,t.jsx)(n.p,{children:"v3.5.3 \u7248\u672c\u4e0d\u4ec5\u4fee\u590d\u4e86\u957f\u671f\u5b58\u5728\u7684 Bug\uff0c\u8fd8\u5f15\u5165\u4e86\u4e00\u7cfb\u5217\u65b0\u7279\u6027\u3002\u8fd9\u4e9b\u65b0\u7279\u6027\u5305\u62ec Pika \u5bf9 ACL \u7684\u652f\u6301\u3001\u79fb\u9664\u4e86 Sharing \u6a21\u5f0f\u7684\u6b8b\u7559 Slot \u4ee3\u7801\u3001\u547d\u4ee4\u6267\u884c\u7684\u5feb\u6162\u5206\u79bb\u3001Redis Stream \u652f\u6301\u3001\u5927 key \u5206\u6790\u5de5\u5177\u3001\u4ee5\u53ca Pika \u5206\u5e03\u5f0f\u96c6\u7fa4\u7684\u5168\u81ea\u52a8\u5316 failover \u7b49\u3002\u6b64\u5916\uff0c\u6211\u4eec\u5728 3.5.3 \u7248\u672c\u4e2d\u589e\u52a0\u4e86\u66f4\u591a\u7684\u81ea\u52a8\u5316\u6d4b\u8bd5\u7528\u4f8b\uff0c\u4ee5\u63d0\u9ad8 Pika \u670d\u52a1\u7684\u7a33\u5b9a\u6027\u548c\u5065\u58ee\u6027\uff0c\u786e\u4fdd\u7528\u6237\u80fd\u591f\u4eab\u53d7\u5230\u66f4\u9ad8\u6548\u3001\u66f4\u7a33\u5b9a\u7684\u4f7f\u7528\u4f53\u9a8c\u3002\u672c\u6587\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u672c\u6b21\u66f4\u65b0\u7684\u4e3b\u8981\u529f\u80fd\u3001Bug \u4fee\u590d\u548c\u6027\u80fd\u63d0\u5347\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6df1\u5165\u63a2\u8ba8 3.5.3 \u7248\u672c\u7684\u66f4\u65b0\u5185\u5bb9\u4e4b\u524d\uff0c\u8bf7\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9\u58f0\u660e\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u7531\u4e8e\u5546\u6807\u95ee\u9898\uff0cPika \u9879\u76ee\u5df2\u66f4\u540d\u4e3a PikiwiDB\u3002\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 PikiwiDB(Pika) \u6765\u6307\u4ee3\u9879\u76ee\uff0c\u9879\u76ee\u5730\u5740\u4e3a\uff1a",(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika",children:"https://github.com/OpenAtomFoundation/pika"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u9879\u76ee ",(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pikiwidb%EF%BC%8C%E8%BF%99%E6%98%AF%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8E",children:"https://github.com/OpenAtomFoundation/pikiwidb\uff0c\u8fd9\u662f\u4e00\u4e2a\u57fa\u4e8e"})," Raft \u534f\u8bae\u5b9e\u73b0\u7684\u517c\u5bb9 Redis \u534f\u8bae\u7684\u5927\u5bb9\u91cf KV \u6570\u636e\u5e93\uff0c\u4e3b\u8981\u9762\u5411\u5f3a\u4e00\u81f4\u6027\u6570\u636e\u573a\u666f\uff0c\u4f8b\u5982\u5b58\u50a8\u7ea6 10TiB \u89c4\u6a21\u7684\u5143\u6570\u636e\u3002PikiwiDB \u5c06\u4e13\u95e8\u7528\u4e8e\u6307\u4ee3\u6b64\u9879\u76ee\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u6211\u4eec\u4e3a PikiwiDB \u8bbe\u8ba1\u4e86\u4e00\u4e2a\u65b0\u7684 logo\uff0c\u4f5c\u4e3a\u5176\u5546\u6807\uff0c\u5e76\u5df2\u5728\u76f8\u5173\u653f\u5e9c\u673a\u6784\u6ce8\u518c\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenAtomFoundation/pikiwidb/blob/unstable/docs/images/pikiwidb-logo.png",alt:""})}),"\n",(0,t.jsx)(n.h2,{id:"1-\u4e3b\u8981\u66f4\u65b0",children:"1 \u4e3b\u8981\u66f4\u65b0"}),"\n",(0,t.jsx)(n.h3,{id:"11-\u652f\u6301-acl",children:"1.1 \u652f\u6301 ACL"}),"\n",(0,t.jsx)(n.p,{children:"PikiwiDB(Pika) 3.5.3 \u7248\u672c\u6b63\u5f0f\u5168\u9762\u652f\u6301 Redis ACL\uff0c\u4e3a\u672a\u6765\u5728\u4e91\u539f\u751f Pika \u96c6\u7fa4\u4e2d\u652f\u6301\u591a\u79df\u6237\u573a\u666f\u5960\u5b9a\u4e86\u57fa\u7840\u3002\u5728\u6b64\u4e4b\u524d\uff0cPika \u5df2\u7ecf\u652f\u6301\u4e86 Redis \u7684\u7528\u6237\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u5982 auth/userpass/requirepass\uff0c\u4ee5\u53ca\u901a\u8fc7 pika.conf \u4e2d\u7684 userblacklist \u914d\u7f6e\u547d\u4ee4\u9ed1\u540d\u5355\u6a21\u5f0f\u3002\u672c\u6b21\u66f4\u65b0\u4fdd\u6301\u4e86\u5411\u540e\u517c\u5bb9\uff0c\u5e76\u652f\u6301\u8fd9\u4e9b\u5df2\u6709\u7684\u4f7f\u7528\u65b9\u5f0f\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u8fd8\u786e\u4fdd PikiwiDB(Pika) \u7684 ACL \u5b9e\u73b0\u4e0e Redis ACL \u5b8c\u5168\u517c\u5bb9\uff0c\u901a\u8fc7\u5c06 Redis \u7684\u6240\u6709 ACL TCL \u6d4b\u8bd5\u96c6\u7eb3\u5165 PikiwiDB(Pika) \u7684\u6d4b\u8bd5\u96c6\u4e2d\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5173\u952e PR \u94fe\u63a5\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2013",children:"PikiwiDB(Pika) \u652f\u6301 ACL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2449",children:"\u4fee\u6b63 ACL \u7528\u6237\u8ba4\u8bc1\u9519\u8bef\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2459",children:"ACL \u5411\u524d\u517c\u5bb9 userblacklist"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2495",children:"\u6dfb\u52a0 Redis ACL \u6d4b\u8bd5\u96c6"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"12-\u6df7\u5408\u5b58\u50a8\u6a21\u578b\u652f\u6301-bitmap",children:"1.2 \u6df7\u5408\u5b58\u50a8\u6a21\u578b\u652f\u6301 bitmap"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5355\u4f53\u73af\u5883\u4e0b\uff0c\u540c\u65f6\u4f18\u5316 PikiwiDB(Pika) \u7684\u8bfb/\u5199/compaction \u662f\u4e00\u9879\u6311\u6218\u3002\u5728 v3.5.2 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5f15\u5165\u4e86\u7531\u7f13\u5b58 Redis \u548c RocksDB \u6784\u6210\u7684\u6df7\u5408\u5b58\u50a8\u6a21\u578b\uff0c\u5e76\u652f\u6301\u4e86 string/list/set/zset/hashtable \u4e94\u79cd\u6570\u636e\u7ed3\u6784\u3002\u5728 3.5.3 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u589e\u52a0\u4e86\u5bf9 bitmap \u7684\u652f\u6301\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6b64\u5916\uff0c\u6211\u4eec\u5728 3.5.3 \u7248\u672c\u4e2d\u652f\u6301\u5bf9 Redis \u7f13\u5b58\u8fdb\u884c\u52a8\u6001\u53c2\u6570\u8c03\u6574\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5173\u952e PR \u94fe\u63a5\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2253",children:"PikiwiDB(Pika) \u652f\u6301 bitmap"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2197",children:"\u652f\u6301\u5bf9 Redis \u7f13\u5b58\u8fdb\u884c\u52a8\u6001\u8c03\u53c2"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"13-\u5feb\u6162\u547d\u4ee4\u5206\u79bb",children:"1.3 \u5feb\u6162\u547d\u4ee4\u5206\u79bb"}),"\n",(0,t.jsx)(n.p,{children:"\u4e3a\u4e86\u907f\u514d\u6162\u547d\u4ee4\u963b\u585e\u5feb\u547d\u4ee4\u7684\u6267\u884c\uff0c\u6211\u4eec\u5728 Codis-Proxy \u548c PikiwiDB(Pika) \u4e24\u4e2a\u5c42\u9762\u5b9e\u73b0\u4e86\u5feb\u6162\u547d\u4ee4\u5206\u79bb\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5173\u952e PR \u94fe\u63a5\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2162",children:"\u5b9e\u73b0\u5feb\u6162\u547d\u4ee4\u5206\u79bb"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"14-redis-stream-\u652f\u6301",children:"1.4 Redis Stream \u652f\u6301"}),"\n",(0,t.jsx)(n.p,{children:"\u867d\u7136 PikiwiDB(Pika) \u4e4b\u524d\u652f\u6301\u4e86 Redis pubsub\uff0c\u4f46\u5b83\u53ea\u80fd\u8fdb\u884c\u5728\u7ebf\u6d88\u606f\u4f20\u9012\u3002\u5728 3.5.3 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u589e\u52a0\u4e86\u5bf9 Redis Stream \u7684\u6709\u9650\u652f\u6301\uff0c\u7c7b\u4f3c\u4e8e\u6d88\u606f\u961f\u5217\uff08MQ\uff09\uff0c\u4ee5\u4fbf\u66f4\u5b89\u5168\u5730\u4f20\u9012\u6d88\u606f\u3002\u4e3a\u4e86\u786e\u4fdd\u6570\u636e\u7684\u5b89\u5168\u6027\uff0c\u6211\u4eec\u5728\u5e95\u5c42\u5f15\u64ce BlackWidow \u4e2d\u7279\u522b\u6dfb\u52a0\u4e86\u5bf9 Stream \u6570\u636e\u7c7b\u578b\u7684\u652f\u6301\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5173\u952e PR \u94fe\u63a5\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1955",children:"Pika \u652f\u6301 Redis Stream"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u8bf7\u6ce8\u610f\uff0cPika Stream \u76ee\u524d\u8fd8\u4e0d\u652f\u6301\u6d88\u8d39\u7ec4\u6d88\u8d39\uff0c\u8fd9\u5c06\u5728\u540e\u7eed\u7248\u672c\u4e2d\u5b9e\u73b0\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"15-\u4e91\u539f\u751f\u96c6\u7fa4",children:"1.5 \u4e91\u539f\u751f\u96c6\u7fa4"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 PikiwiDB(Pika) 3.5.0 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5f00\u6e90\u4e86 Pika-Operator\uff0c\u5b83\u652f\u6301\u5728 K8s \u4e0a\u90e8\u7f72 Pika \u4e3b\u4ece\u5bf9\u3002\u5728 3.5.2 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u57fa\u4e8e Kubeblocks \u7684 Pika-Operator \u652f\u6301\u4e86\u5728 K8s \u4e0a\u90e8\u7f72\u7c7b\u4f3c Codis \u7684 Pika Cluster\uff0c\u4f46\u5f53\u65f6\u8fd8\u4e0d\u652f\u6301\u52a8\u6001\u6269\u7f29\u5bb9\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 3.5.3 \u7248\u672c\u4e2d\uff0c\u6700\u65b0\u7684 Pika-Operator \u5df2\u7ecf\u652f\u6301\u4e86 Codis Group \u7ea7\u522b\u7684\u8282\u70b9\u6269\u7f29\u5bb9\uff0c\u5e76\u4e14\u652f\u6301\u6570\u636e\u7684 Rebalance\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5173\u952e PR \u94fe\u63a5\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2121",children:"Pika-Operator \u652f\u6301 Pika \u96c6\u7fa4\u81ea\u52a8\u6269\u5bb9"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2486",children:"\u4f18\u5316 codis slot \u8fc1\u79fb\u901f\u5ea6\uff0c\u652f\u6301\u52a8\u6001\u4fee\u6539\u8fc1\u79fb\u7ebf\u7a0b\u548c\u901f\u5ea6"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2480",children:"Pika-operator \u652f\u6301 namespace\uff0c\u53ef\u5728\u4e0d\u540c namespace \u4e0b\u90e8\u7f72\u4e0d\u540c\u7684\u96c6\u7fa4"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2451",children:"Pika-operator \u652f\u6301\u76d1\u63a7\u6307\u6807\u91c7\u96c6\uff0c\u81ea\u52a8\u62c9\u8d77 pika-expoter"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"16-compaction-\u4f18\u5316",children:"1.6 Compaction \u4f18\u5316"}),"\n",(0,t.jsx)(n.p,{children:"PikiwiDB(Pika) \u7684\u5e95\u5c42\u78c1\u76d8\u5b58\u50a8\u5f15\u64ce RocksDB \u5728\u8fdb\u884c compaction \u65f6\u4f1a\u663e\u8457\u5f71\u54cd PikiwiDB(Pika) \u7684\u8bfb\u5199\u6027\u80fd\u3002\u56e0\u6b64\uff0c\u63a7\u5236\u597d compaction \u662f\u4f18\u5316 Pika \u8bfb\u5199\u6027\u80fd\u7684\u5173\u952e\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5173\u952e PR \u94fe\u63a5\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2163",children:"\u6dfb\u52a0 CompactRange \u547d\u4ee4\uff0c\u652f\u6301\u5bf9\u4e00\u5b9a\u8303\u56f4\u5185\u7684 key \u8fdb\u884c compact"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2172",children:"\u63d0\u5347 Compaction \u901f\u5ea6\uff0c\u51cf\u5c11 Compaction \u8017\u65f6"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2345",children:"\u6267\u884c shutdown \u547d\u4ee4\u65f6\u8c03\u7528 disable compaction\uff0c\u63d0\u5347\u8fdb\u7a0b\u9000\u51fa\u901f\u5ea6"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"17-\u81ea\u52a8-failover",children:"1.7 \u81ea\u52a8 Failover"}),"\n",(0,t.jsx)(n.p,{children:"PikiwiDB(Pika) \u96c6\u7fa4\u76ee\u524d\u662f\u57fa\u4e8e Codis \u5b9e\u73b0\u7684\u3002\u4e3a\u4e86\u63d0\u9ad8\u57fa\u4e8e Codis \u7684 PikiwiDB(Pika) Cluster \u7684\u6613\u7528\u6027\uff0c\u6211\u4eec\u5bf9 Codis \u8fdb\u884c\u4e86\u8bb8\u591a\u6269\u5c55\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u539f\u59cb\u7684 Codis \u4e0d\u652f\u6301 Group \u5185\u7684 Failover\uff0c\u9700\u8981\u4f7f\u7528 Redis Sentinel\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u8fd0\u7ef4\u6210\u672c\u589e\u52a0\u3002\u6211\u4eec\u5728 Codis Dashboard \u4e2d\u52a0\u5165\u4e86 sentinel \u7684\u529f\u80fd\uff0c\u5b9e\u73b0\u4e86\u5bf9 Group \u5185\u4e3b\u4ece\u7684\u81ea\u52a8 failover\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5173\u952e PR \u94fe\u63a5\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2386",children:"PikiwiDB(Pika) \u5206\u5e03\u5f0f\u96c6\u7fa4\u652f\u6301\u81ea\u52a8 failover"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"18-\u53ef\u89c2\u6d4b\u6027\u63d0\u5347",children:"1.8 \u53ef\u89c2\u6d4b\u6027\u63d0\u5347"}),"\n",(0,t.jsx)(n.p,{children:"PikiwiDB(Pika) \u7684\u53ef\u89c2\u6d4b\u6027\u5173\u952e\u7ec4\u4ef6\u662f Pika-Exporter\u3002\u5728 3.5.2 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u867d\u7136\u6dfb\u52a0\u4e86 Redis Cache \u7f13\u5b58\u70ed\u6570\u636e\uff0c\u4f46\u7f3a\u5c11\u76d1\u63a7\u6307\u6807\u3002\u5728 3.5.3 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u589e\u52a0\u4e86\u5305\u62ec\u547d\u4e2d\u7387\u3001\u6bcf\u79d2\u547d\u4e2d\u6b21\u6570\u3001Redis Cache \u5185\u5b58\u4f7f\u7528\u91cf\u3001Redis Cache \u4e2a\u6570\u3001Redis Cache DB \u4e2a\u6570 \u7b49\u6307\u6807\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5173\u952e PR \u94fe\u63a5\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2318",children:"Pika exporter \u66b4\u9732 cache \u76f8\u5173\u7684\u6570\u636e\u91c7\u96c6\u6307\u6807"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2199",children:"PikiwiDB(Pika) \u5206\u5e03\u5f0f\u96c6\u7fa4 Codis proxy \u65b0\u589e\u53ef\u89c2\u6d4b\u6307\u6807"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2494",children:"\u4fee\u590d dbsize \u8ba1\u7b97\u9519\u8bef\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2234",children:"\u4fee\u590d\u7f51\u7edc\u76d1\u63a7\u6307\u6807\u7edf\u8ba1\u4e0d\u51c6\u786e\u7684\u95ee\u9898"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"19-\u6570\u636e\u4e00\u81f4\u6027",children:"1.9 \u6570\u636e\u4e00\u81f4\u6027"}),"\n",(0,t.jsx)(n.p,{children:"3.5.3 \u7248\u672c\u4fee\u590d\u4e86\u8bb8\u591a PikiwiDB(Pika) \u4e3b\u4ece\u540c\u6b65\u95ee\u9898\uff0c\u786e\u4fdd\u6570\u636e\u7684\u4e00\u81f4\u6027\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5173\u952e PR \u94fe\u63a5\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2319",children:"\u4fee\u590d\u4e3b\u4ece\u590d\u5236\u8fc7\u7a0b\u4e2d\uff0cslave \u8282\u70b9\u6536\u5230 master \u5f02\u5e38\u56de\u5305\u540e\u7684\u5904\u7406\u903b\u8f91"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2225",children:"\u4fee\u590d Pika cache \u90e8\u5206\u573a\u666f\u4e0b cache \u548c DB \u6570\u636e\u4e0d\u4e00\u81f4\u7684\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2439",children:"\u4fee\u590d\u5168\u91cf\u590d\u5236\u5931\u8d25\u540e\uff0c\u672a\u505a\u5904\u7406\u5bfc\u81f4\u6570\u636e\u4e22\u5931\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2437",children:"\u4fee\u590d\u4e3b\u4ece\u590d\u5236\u8fc7\u7a0b\u4e2d\uff0c\u4e3b\u5b9e\u4f8b\u6267\u884c bgsave \u8fc7\u7a0b\u4e2d\uff0c\u6ca1\u6709\u6b63\u786e\u56de\u5e94\u4ece\u7684\u540c\u6b65\u8bf7\u6c42"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2430",children:"\u5168\u91cf\u590d\u5236\u8fc7\u7a0b\u4e2d\uff0c\u6dfb\u52a0\u6570\u636e\u540c\u6b65\u72b6\u6001\uff0c\u660e\u786e\u6570\u636e\u540c\u6b65\u8fdb\u5ea6"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2409",children:"\u4fee\u590d\u4ece\u5e93\u5728 Apply binlog \u65f6\uff0c\u6ca1\u6709\u5bf9\u64cd\u4f5c\u7684 key \u52a0\u9501\uff0c\u5bfc\u81f4\u6570\u636e\u4e0d\u4e00\u81f4\u7684\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2485",children:"\u4fee\u590d\u8fc1\u79fb\u6570\u636e\u540e\u6570\u636e\u4e0d\u4e00\u81f4\u7684\u95ee\u9898"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"110-\u6d4b\u8bd5\u96c6\u589e\u52a0",children:"1.10 \u6d4b\u8bd5\u96c6\u589e\u52a0"}),"\n",(0,t.jsx)(n.p,{children:"PikiwiDB(Pika) \u7684\u6d4b\u8bd5\u96c6\u7531 gtest \u5355\u6d4b\u3001Redis TCL \u6d4b\u8bd5\u96c6\u548c Go \u6d4b\u8bd5\u96c6\u7ec4\u6210\u3002\u5728 3.5.3 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u589e\u52a0\u4e86 Codis \u96c6\u7fa4 e2e \u6d4b\u8bd5\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5173\u952e PR \u94fe\u63a5\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2497",children:"Pika TCL \u6d4b\u8bd5\u96c6"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2502",children:"Pika Gotest \u6d4b\u8bd5\u96c6"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"111-\u5de5\u5177\u96c6\u66f4\u65b0",children:"1.11 \u5de5\u5177\u96c6\u66f4\u65b0"}),"\n",(0,t.jsxs)(n.p,{children:["PikiwiDB(Pika) \u4e00\u76f4\u91cd\u89c6\u5de5\u5177\u96c6\u7684\u5efa\u8bbe\uff0c\u6240\u6709\u76f8\u5173\u5de5\u5177\u90fd\u53ef\u4ee5\u5728 ",(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/tree/unstable/tools",children:"https://github.com/OpenAtomFoundation/pika/tree/unstable/tools"})," \u4e2d\u627e\u5230\u3002\u5728 3.5.3 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u65b0\u589e\u4e86\u4e00\u4e2a\u5de5\u5177\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2195",children:"PikiwiDB(Pika) \u652f\u6301\u5927 key \u5206\u6790\u5de5\u5177"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"112-\u6587\u6863\u66f4\u65b0",children:"1.12 \u6587\u6863\u66f4\u65b0"}),"\n",(0,t.jsx)(n.p,{children:"PikiwiDB(Pika) \u7684\u6587\u6863\u4e3b\u8981\u662f wiki \u6587\u6863\u3002\u5728 3.5.3 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u66f4\u65b0\u4e86 Pika \u652f\u6301\u7684 Redis \u547d\u4ee4\u6587\u6863\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u6587\u6863\u94fe\u63a5\uff1a",(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/wiki/pika-%E6%94%AF%E6%8C%81%E7%9A%84redis%E6%8E%A5%E5%8F%A3%E5%8F%8A%E5%85%BC%E5%AE%B9%E6%83%85%E5%86%B5",children:"https://github.com/OpenAtomFoundation/pika/wiki/pika-%E6%94%AF%E6%8C%81%E7%9A%84redis%E6%8E%A5%E5%8F%A3%E5%8F%8A%E5%85%BC%E5%AE%B9%E6%83%85%E5%86%B5"})]}),"\n",(0,t.jsx)(n.h2,{id:"2-\u53d1\u7248\u8be6\u60c5",children:"2 \u53d1\u7248\u8be6\u60c5"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u7b2c\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u6982\u8ff0\u4e86 3.5.3 \u7248\u672c\u7684\u4e3b\u8981\u529f\u80fd\u5347\u7ea7\u548c\u6539\u8fdb\u3002\u4e0b\u9762\u8be6\u7ec6\u5217\u51fa\u4e86\u672c\u6b21\u53d1\u7248\u7684\u76f8\u5173 PR\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"21-\u65b0\u7279\u6027",children:"2.1 \u65b0\u7279\u6027"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2013",children:"Pika \u652f\u6301 ACL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2197",children:"\u5728\u5168\u91cf\u590d\u5236\u8fc7\u7a0b\u4e2d\uff0cpika \u670d\u52a1\u7684\u4ece\u8282\u70b9\u4e0d\u63a5\u6536\u8bfb\u8bf7\u6c42"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2251",children:"\u5220\u9664 Sharing \u6a21\u5f0f\u6b8b\u7559\u7684 Slot \u4ee3\u7801\uff0c\u56de\u5f52 3.0\uff0c\u4ee5\u540e\u4e00\u4e2a Pika \u4e0b\u6709\u591a\u4e2a DB\uff0c\u6bcf\u4e2a DB \u53ea\u6709\u4e00\u4e2a Blackwidow"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2349",children:"\u5728 Codis dashboard \u534f\u7a0b panic \u65f6\u81ea\u52a8\u6062\u590d\u670d\u52a1"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2253",children:"Pika cache \u65b0\u589e bimap\u6570\u636e\u7c7b\u578b"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2162",children:"Pika \u652f\u6301\u5feb\u6162\u547d\u4ee4\u5206\u79bb"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2318",children:"Pika exporter \u66b4\u9732 cache \u76f8\u5173\u7684\u6570\u636e\u91c7\u96c6\u6307\u6807"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2167",children:"Pika \u6267\u884c\u5b8c\u6210 Bgsave \u540e, \u4fdd\u7559 unix timepoint"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2257",children:"Pika \u652f\u6301\u52a8\u6001\u914d\u7f6e disable_auto_compations \u53c2\u6570"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/1955",children:"Pika \u652f\u6301 Redis Stream"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2195",children:"Pika \u652f\u6301\u5927 key \u5206\u6790\u5de5\u5177"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2197",children:"Pika \u652f\u6301\u52a8\u6001\u8c03\u6574 Pika cache \u53c2\u6570"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2222",children:"\u66f4\u65b0 Pika benchmark \u5de5\u5177\u652f\u6301\u66f4\u591a\u7684\u63a5\u53e3\u538b\u6d4b"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2121",children:"Pika Operator \u652f\u6301 Pika \u96c6\u7fa4\u81ea\u52a8\u6269\u5bb9"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2163",children:"\u6dfb\u52a0 CompactRange \u547d\u4ee4\u652f\u6301\u5bf9\u4e00\u5b9a\u8303\u56f4\u5185\u7684 key \u8fdb\u884c compact"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2172",children:"\u63d0\u5347 Compaction \u901f\u5ea6\u51cf\u5c11 Compaction \u8017\u65f6"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2157",children:"\u5347\u7ea7 RocksDB \u7248\u672c\u5230 v8.7.3"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2199",children:"Pika \u5206\u5e03\u5f0f\u96c6\u7fa4 Codis proxy \u65b0\u589e\u53ef\u89c2\u6d4b\u6307\u6807"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2386",children:"Pika \u5206\u5e03\u5f0f\u96c6\u7fa4\u652f\u6301\u81ea\u52a8 failover"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2455",children:"Pika \u652f\u6301 redis rename-command \u529f\u80fd"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2486",children:"\u4f18\u5316 codis slot \u8fc1\u79fb\u901f\u5ea6\uff0c\u652f\u6301\u52a8\u6001\u4fee\u6539\u8fc1\u79fb\u7ebf\u7a0b\u548c\u901f\u5ea6"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2434",children:"Pika \u652f\u6301\u52a8\u6001\u8c03\u6574 max-conn-rbuf-size \u53c2\u6570"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2480",children:"Pika-operator \u652f\u6301 namespace\uff0c\u53ef\u4ee5\u5728\u4e0d\u540c\u7684 namespace \u4e0b\u90e8\u7f72\u4e0d\u540c\u7684\u96c6\u7fa4"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2451",children:"Pika-operator \u652f\u6301\u76d1\u63a7\u6307\u6807\u91c7\u96c6\uff0c\u81ea\u52a8\u62c9\u8d77 pika-expoter"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2459",children:"ACL \u5411\u524d\u517c\u5bb9 userblacklist"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2497",children:"\u4e30\u5bcc\u4e86 Pika TCL \u6d4b\u8bd5\u96c6"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2502",children:"\u4e30\u5bcc\u4e86 Pika Gotest \u6d4b\u8bd5\u96c6"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"22-bug-\u4fee\u590d",children:"2.2 Bug \u4fee\u590d"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2377",children:"\u4fee\u590d Pika \u6709\u4ece\u8282\u70b9\u8fdb\u884c\u5168\u91cf\u590d\u5236\u671f\u95f4\u4f1a\u8bef\u5220\u9664 dump \u6587\u4ef6\u7684\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2319",children:"\u4fee\u590d\u4e3b\u4ece\u590d\u5236\u8fc7\u7a0b\u4e2d, slave \u8282\u70b9\u6536\u5230 master \u5f02\u5e38\u56de\u5305\u540e\u7684\u5904\u7406\u903b\u8f91"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2345",children:"\u5728 Pika \u6267\u884c shutdown \u547d\u4ee4\u65f6\u8c03\u7528 disable compaction, \u63d0\u5347\u8fdb\u7a0b\u9000\u51fa\u901f\u5ea6"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2337",children:"\u4fee\u590d Codis-dashboard Redis Memory \u503c\u4e0d\u51c6\u786e\u7684\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2197",children:"INFO \u547d\u4ee4\u8017\u65f6\u4f18\u5316\uff0c\u964d\u4f4e\u67e5\u78c1\u76d8\u4f7f\u7528\u91cf\u7684\u9891\u7387"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2186",children:"\u4fee\u590d Rsync \u5220\u9664\u4e34\u65f6\u6587\u4ef6\u8def\u5f84\u4e0d\u5bf9\uff0c\u5220\u9664\u5931\u8d25\uff0c\u5bfc\u81f4rocksdb\u6253\u5f00\u5931\u8d25\u7684\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2194",children:"\u4fee\u590d Compact, Bgsave, Info keyspace \u547d\u4ee4\u672a\u6307\u5b9adb\u540d\u79f0\uff0c\u5bfc\u81f4\u90e8\u5206\u547d\u4ee4 coredump \u7684\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2198",children:"Codis dashboard \u7528 info replication \u66ff\u4ee3 info \u547d\u4ee4\u67e5\u5bfb master ip \u964d\u4f4e\u5bf9 Pika \u7684\u6027\u80fd\u5f71\u54cd"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2225",children:"\u4fee\u590d Pika cache \u4f7f\u7528\u8fb9\u7f18case\uff0c\u89e3\u51b3\u90e8\u5206\u573a\u666f\u4e0b cache \u548c DB \u6570\u636e\u4e0d\u4e00\u81f4\u7684\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2265",children:"\u4fee\u590d\u5f53 dump \u6587\u4ef6\u5939\u4e3a\u7a7a\u65f6\uff0c\u4f1a\u542f\u52a8\u62a5\u9519 Segmentation fault \u7684\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2217",children:"\u4fee\u590d\u56e0\u4e3a flag \u8ba1\u7b97\u9519\u8bef\uff0c\u5bfc\u81f4\u7684\u90e8\u5206\u547d\u4ee4\u7f13\u5b58\u6ca1\u6709\u751f\u6548\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2249",children:"\u4fee\u590d\u4e3b\u4ece\u590d\u5236\u6a21\u5f0f\u4e0b\uff0c\u4e3b\u5b9e\u4f8b flushdb \u540e\uff0c\u4ece\u5b9e\u4f8b\u56e0\u4e3a\u6b7b\u9501\u5bfc\u81f4\u7684\u4e0d\u80fd\u8bbf\u95ee\u7684\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2187",children:"\u4fee\u590d\u90e8\u5206\u547d\u4ee4\u672a\u5bf9 RocksDB \u7684\u8fd4\u56de\u503c\u8fdb\u884c\u5224\u65ad\u7684\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2176",children:"\u89c4\u8303\u51fd\u6570\u7684\u8fd4\u56de\u503c\u53ca\u521d\u59cb\u503c"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2234",children:"\u4fee\u590d\u7f51\u7edc\u76d1\u63a7\u6307\u6807\u7edf\u8ba1\u4e0d\u51c6\u786e\u7684\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2218",children:"\u4fee\u590d\u914d\u7f6e\u6587\u4ef6\u52a0\u8f7d\u90e8\u5206\u53c2\u6570\u5f02\u5e38\u7684\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2393",children:"\u4fee\u590d Codis dashboard cpu 100% \u7684\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2387",children:"\u4fee\u590d Codis fe pika \u4e3b\u4ece\u89d2\u8272\u663e\u793a\u5f02\u5e38\u7684\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2485",children:"\u4fee\u590d\u8fc1\u79fb\u6570\u636e\u540e\u6570\u636e\u4e0d\u4e00\u81f4\u7684\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2494",children:"\u4fee\u590d dbsize \u8ba1\u7b97\u9519\u8bef\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2475",children:"\u4fee\u590d\u6269\u7f29\u5bb9\u6216\u8005 pod \u8d77\u505c\u540e\uff0cCodis-dashboard \u754c\u9762\u663e\u793a\u4e0d\u51c6\u786e\u7684\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2372",children:"\u4fee\u590d DB \u5c42\u91cd\u590d\u4e0a\u9501\u7684\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2439",children:"\u4fee\u590d\u5168\u91cf\u590d\u5236\u5931\u8d25\u540e\uff0c\u672a\u505a\u5904\u7406\u5bfc\u81f4\u6570\u636e\u4e22\u5931\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2437",children:"\u4fee\u590d\u4e3b\u4ece\u590d\u5236\u8fc7\u7a0b\u4e2d\uff0c\u4e3b\u5b9e\u4f8b\u6267\u884c bgsave \u8fc7\u7a0b\u4e2d\uff0c\u6ca1\u6709\u6b63\u786e\u56de\u5e94\u4ece\u7684\u540c\u6b65\u8bf7\u6c42"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2430",children:"\u5168\u91cf\u590d\u5236\u8fc7\u7a0b\u4e2d\uff0c\u6dfb\u52a0\u6570\u636e\u540c\u6b65\u72b6\u6001\uff0c\u660e\u786e\u6570\u636e\u540c\u6b65\u8fdb\u5ea6"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2409",children:"\u4fee\u590d\u4ece\u5e93\u5728 Apply binlog \u65f6\uff0c\u6ca1\u6709\u5bf9\u64cd\u4f5c\u7684 key \u52a0\u9501\uff0c\u5bfc\u81f4\u6570\u636e\u4e0d\u4e00\u81f4\u7684\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2415",children:"\u4fee\u590d codis slot \u8fc1\u79fb\u8fc7\u7a0b\u4e2d master \u5b9e\u4f8b coredump \u7684\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2377",children:"\u4fee\u590d\u5728\u4e3b\u4ece\u590d\u5236\u8fc7\u7a0b\u4e2d\uff0c\u5220\u9664\u6b63\u5728\u4f7f\u7528\u7684 dump \u6587\u4ef6\u7684\u95ee\u9898"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/pull/2319",children:"\u4fee\u590d\u4e3b\u4ece\u590d\u5236\u8fc7\u7a0b\u4e2d\u4ece\u5b9e\u4f8b rsync \u54cd\u5e94\u9519\u8bef\u7684\u95ee\u9898"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"23-\u53d1\u7248\u6807\u7b7e",children:"2.3 \u53d1\u7248\u6807\u7b7e"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/OpenAtomFoundation/pika/releases/tag/v3.5.3",children:"https://github.com/OpenAtomFoundation/pika/releases/tag/v3.5.3"})}),"\n",(0,t.jsx)(n.h2,{id:"3-\u793e\u533a",children:"3 \u793e\u533a"}),"\n",(0,t.jsx)(n.p,{children:"PikiwiDB(Pika) \u5f00\u6e90\u793e\u533a\u611f\u8c22\u60a8\u7684\u652f\u6301\uff0c\u5982\u679c\u60a8\u6709\u4efb\u4f55\u7591\u95ee\u6216\u5efa\u8bae\uff0c\u6b22\u8fce\u52a0\u5165\u6211\u4eec\u7684\u793e\u533a\u4ea4\u6d41\u7fa4\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5fae\u4fe1\u52a9\u624b PikiwiDB\u3010\u8bf7\u5728\u5fae\u4fe1\u4e2d\u641c\u7d22 PikiwiDB\u3011"}),"\n",(0,t.jsxs)(n.li,{children:["telegram \u7fa4 ",(0,t.jsx)(n.a,{href:"https://t.me/+gMlTzNacOF1iMTM1",children:"https://t.me/+gMlTzNacOF1iMTM1"})]}),"\n"]})]})}function r(i={}){const{wrapper:n}={...(0,l.R)(),...i.components};return n?(0,t.jsx)(n,{...i,children:(0,t.jsx)(d,{...i})}):d(i)}},8453:(i,n,e)=>{e.d(n,{R:()=>a,x:()=>o});var t=e(6540);const l={},h=t.createContext(l);function a(i){const n=t.useContext(h);return t.useMemo((function(){return"function"==typeof i?i(n):{...n,...i}}),[n,i])}function o(i){let n;return n=i.disableParentContext?"function"==typeof i.components?i.components(l):i.components||l:a(i.components),t.createElement(h.Provider,{value:n},i.children)}}}]);