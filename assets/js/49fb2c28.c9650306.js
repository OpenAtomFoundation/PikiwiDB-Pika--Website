"use strict";(self.webpackChunkPikiwiDB_Pika_=self.webpackChunkPikiwiDB_Pika_||[]).push([[7765],{583:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var t=i(4848),s=i(8453);const r={title:"\u8ba2\u9605",sidebar_position:60},l="Pika Pub/Sub\u6587\u6863",d={id:"\u4f7f\u7528\u4e0e\u8fd0\u7ef4/\u8ba2\u9605/index",title:"\u8ba2\u9605",description:"\u53ef\u7528\u7248\u672c\uff1a >= 2.3.0",source:"@site/docs/\u4f7f\u7528\u4e0e\u8fd0\u7ef4/\u8ba2\u9605/index.md",sourceDirName:"\u4f7f\u7528\u4e0e\u8fd0\u7ef4/\u8ba2\u9605",slug:"/\u4f7f\u7528\u4e0e\u8fd0\u7ef4/\u8ba2\u9605/",permalink:"/docs/\u4f7f\u7528\u4e0e\u8fd0\u7ef4/\u8ba2\u9605/",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenAtomFoundation/PikiwiDB-Pika--Website/tree/main/docs/\u4f7f\u7528\u4e0e\u8fd0\u7ef4/\u8ba2\u9605/index.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"\u8ba2\u9605",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"\u5dee\u5f02\u5316\u547d\u4ee4",permalink:"/docs/\u4f7f\u7528\u4e0e\u8fd0\u7ef4/\u5dee\u5f02\u5316\u547d\u4ee4/"},next:{title:"\u5206\u5e03\u5f0f\u6a21\u5f0f\u7b80\u5355\u6559\u7a0b",permalink:"/docs/\u4f7f\u7528\u4e0e\u8fd0\u7ef4/\u5206\u5e03\u5f0f\u6a21\u5f0f\u7b80\u5355\u6559\u7a0b/"}},u={},a=[{value:"Pika \u53d1\u5e03\u8ba2\u9605\u547d\u4ee4",id:"pika-\u53d1\u5e03\u8ba2\u9605\u547d\u4ee4",level:2},{value:"\u4ee5\u4e0b\u4e3aPub/Sub\u53d1\u5e03\u8ba2\u9605\u547d\u4ee4, \u4e0eRedis\u5b8c\u5168\u517c\u5bb9",id:"\u4ee5\u4e0b\u4e3apubsub\u53d1\u5e03\u8ba2\u9605\u547d\u4ee4-\u4e0eredis\u5b8c\u5168\u517c\u5bb9",level:5},{value:"\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u53c2\u8003Redis\u7684Pub/Sub\u6587\u6863",id:"\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u53c2\u8003redis\u7684pubsub\u6587\u6863",level:4}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h4:"h4",h5:"h5",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"pika-pubsub\u6587\u6863",children:"Pika Pub/Sub\u6587\u6863"}),"\n",(0,t.jsx)(n.p,{children:"\u53ef\u7528\u7248\u672c\uff1a >= 2.3.0"}),"\n",(0,t.jsx)(n.p,{children:"\u6ce8\u610f:\t\u6682\u4e0d\u652f\u6301\u952e\u7a7a\u95f4\u901a\u77e5\u529f\u80fd"}),"\n",(0,t.jsx)(n.h2,{id:"pika-\u53d1\u5e03\u8ba2\u9605\u547d\u4ee4",children:"Pika \u53d1\u5e03\u8ba2\u9605\u547d\u4ee4"}),"\n",(0,t.jsx)(n.h5,{id:"\u4ee5\u4e0b\u4e3apubsub\u53d1\u5e03\u8ba2\u9605\u547d\u4ee4-\u4e0eredis\u5b8c\u5168\u517c\u5bb9",children:"\u4ee5\u4e0b\u4e3aPub/Sub\u53d1\u5e03\u8ba2\u9605\u547d\u4ee4, \u4e0eRedis\u5b8c\u5168\u517c\u5bb9"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"PUBSUB subcommand [argument [argument ...]]"}),"\n",(0,t.jsx)(n.li,{children:"PUBLISH channel message"}),"\n",(0,t.jsx)(n.li,{children:"SUBSCRIBE channel [channel ...]"}),"\n",(0,t.jsx)(n.li,{children:"PSUBSCRIBE pattern [pattern ...]"}),"\n",(0,t.jsx)(n.li,{children:"UNSUBSCRIBE [channel [channel ...]]"}),"\n",(0,t.jsx)(n.li,{children:"PUNSUBSCRIBE [pattern [pattern ...]]"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u53c2\u8003redis\u7684pubsub\u6587\u6863",children:["\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u53c2\u8003Redis\u7684",(0,t.jsx)(n.a,{href:"http://redisdoc.com/topic/pubsub.html",children:"Pub/Sub\u6587\u6863"})]})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var t=i(6540);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);