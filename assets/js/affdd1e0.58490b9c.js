"use strict";(self.webpackChunkPikiwiDB_Pika_=self.webpackChunkPikiwiDB_Pika_||[]).push([[7938],{4050:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var r=i(4848),l=i(8453);const t={title:"c++ coding style",sidebar_position:1},s=void 0,c={id:"\u5f00\u53d1\u6587\u6863/coding-style/index",title:"c++ coding style",description:"header file",source:"@site/docs/\u5f00\u53d1\u6587\u6863/coding-style/index.md",sourceDirName:"\u5f00\u53d1\u6587\u6863/coding-style",slug:"/\u5f00\u53d1\u6587\u6863/coding-style/",permalink:"/docs/\u5f00\u53d1\u6587\u6863/coding-style/",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenAtomFoundation/PikiwiDB-Pika--Website/tree/main/docs/\u5f00\u53d1\u6587\u6863/coding-style/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"c++ coding style",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u7f16\u7801\u89c4\u8303",permalink:"/docs/\u5f00\u53d1\u6587\u6863/\u7f16\u7801\u89c4\u8303/"}},d={},o=[{value:"header file",id:"header-file",level:3},{value:"Name and order of includes",id:"name-and-order-of-includes",level:4},{value:"class",id:"class",level:3},{value:"Doing work in constructors",id:"doing-work-in-constructors",level:4},{value:"Inheritance",id:"inheritance",level:4},{value:"Function",id:"function",level:3},{value:"parameter Ordering",id:"parameter-ordering",level:4},{value:"reference Arguments",id:"reference-arguments",level:4},{value:"function overloading",id:"function-overloading",level:4},{value:"default value",id:"default-value",level:4},{value:"scoping",id:"scoping",level:3},{value:"Nonmember, static member, global function",id:"nonmember-static-member-global-function",level:4},{value:"other",id:"other",level:3},{value:"\u5173\u4e8eexception \u7684\u4f7f\u7528",id:"\u5173\u4e8eexception-\u7684\u4f7f\u7528",level:4},{value:"\u5173\u4e8e\u8fd4\u56de\u503c",id:"\u5173\u4e8e\u8fd4\u56de\u503c",level:4},{value:"brace initializer List",id:"brace-initializer-list",level:4},{value:"sizeof",id:"sizeof",level:4},{value:"Run-Time Type Information(RTTI)",id:"run-time-type-informationrtti",level:4},{value:"cast",id:"cast",level:4},{value:"stream",id:"stream",level:4},{value:"Friend",id:"friend",level:4},{value:"use of const",id:"use-of-const",level:4},{value:"Integer type",id:"integer-type",level:4},{value:"0 and nullptr/NULL",id:"0-and-nullptrnull",level:4},{value:"Comments",id:"comments",level:3},{value:"TODO comment",id:"todo-comment",level:4},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3}];function a(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"header-file",children:"header file"}),"\n",(0,r.jsx)(n.h4,{id:"name-and-order-of-includes",children:"Name and order of includes"}),"\n",(0,r.jsx)(n.p,{children:"\u987a\u5e8f\u662f"}),"\n",(0,r.jsxs)(n.p,{children:["Related header, C library, C++ library,  other libraries'.h",(0,r.jsx)(n.code,{children:", your project's "}),".h`."]}),"\n",(0,r.jsx)(n.p,{children:"\u4e0d\u8981\u4f7f\u7528 . \u4ee5\u53ca ..  \u8fd9\u6837\u7684\u7b26\u53f7"}),"\n",(0,r.jsx)(n.p,{children:"\u6bd4\u5982\u4e00\u4e2a\u9879\u76ee\u7684include \u5934\u6587\u4ef6\u5e94\u8be5\u662f\u8fd9\u6837"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c++",children:'#include "foo/server/fooserver.h"\n\n#include <sys/types.h>\n#include <unistd.h>\n\n#include <hash_map>\n#include <vector>\n\n#include "base/basictypes.h"\n#include "base/commandlineflags.h"\n#include "foo/server/bar.h"\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"class",children:"class"}),"\n",(0,r.jsx)(n.h4,{id:"doing-work-in-constructors",children:"Doing work in constructors"}),"\n",(0,r.jsx)(n.p,{children:"constructor \u4e0d\u80fd\u8c03\u7528\u865a\u51fd\u6570, \u56e0\u4e3a\u5728\u6784\u9020\u7684\u65f6\u5019, \u8fd9\u4e2a\u5bf9\u8c61\u8fd8\u6ca1\u6709\u5b8c\u5168\u751f\u6210, \u56e0\u6b64\u8c03\u7528\u865a\u51fd\u6570\u80af\u5b9a\u662f\u4e0d\u5bf9\u7684"}),"\n",(0,r.jsx)(n.h4,{id:"inheritance",children:"Inheritance"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 override \u6765\u8868\u793a\u67d0\u4e00\u4e2a\u51fd\u6570\u662fvirtual \u51fd\u6570\u7684\u91cd\u65b0\u5b9e\u73b0, \u8fd9\u6837\u5c31\u4e0d\u9700\u8981\u5728\u770b\u4ee3\u7801\u7684\u65f6\u5019\u786e\u8ba4\u8fd9\u4e2a\u51fd\u6570\u662f\u5426\u662f\u91cd\u8f7d, \u5982\u679c\u5728\u5b50\u7c7b\u91cc\u9762\u5bf9\u4e00\u4e2a\u7236\u7c7b\u6ca1\u6709\u7684\u51fd\u6570\u8fdb\u884coverride\u4e5f\u662f\u4f1a\u76f4\u63a5\u62a5\u9519\u7684"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4f7f\u7528struct\u7684\u65f6\u5019 \u53ea\u7528\u5728\u53ea\u5b9a\u4e49\u6570\u636e,\u4e0d\u5305\u542b\u4efb\u4f55\u65b9\u6cd5\u7684\u7ed3\u6784\u4f53\u91cc\u9762\uff0c\u51fa\u4e86\u7b80\u5355\u7684\u6784\u9020\u51fd\u6570\u6216\u8005init\u51fd\u6570."}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u4f7f\u7528\u7ee7\u627f\u53ef\u4ee5\u6709\u6548\u7684\u51cf\u5c11\u4ee3\u7801\u91cf \u5e76\u4e14\u56e0\u4e3a\u7ee7\u627f\u662f\u7f16\u8bd1\u65f6\u671f\u7684 \u56e0\u6b64\u5728\u7f16\u8bd1\u5668\u80fd\u591f\u8bc6\u522b\u8fd9\u4e9b\u9519\u8bef  \u63a5\u53e3\u7ee7\u627f(\u4e5f\u5c31\u662f\u5b9a\u4e49\u7eaf\u865a\u51fd\u6570) \u66f4\u662f\u80fd\u591f\u5728\u7f16\u8bd1\u671f\u5c31\u8bc6\u522b\u4e00\u4e2a\u7ee7\u627f\u7684\u7c7b\u662f\u5426\u5b9e\u73b0\u4e86\u5168\u90e8\u7684\u63a5\u53e3"}),"\n",(0,r.jsx)(n.p,{children:"\u4f46\u662f\u7531\u4e8e\u7ee7\u627f\u628a\u4e00\u4e2a\u7c7b\u7684\u4ee3\u7801\u5206\u6563\u5728\u5404\u4e2a\u6587\u4ef6\u91cc\u9762\u4e86 \u56e0\u6b64\u589e\u52a0\u4e86\u770b\u4ee3\u7801\u7684\u96be\u5ea6 \u5e76\u4e14\u7236\u7c7b\u5b9a\u4e49\u81ea\u5df1\u7684\u6210\u5458\u53d8\u91cf \u56e0\u6b64\u8bbf\u95ee\u7684\u65f6\u5019\u4e0d\u662f\u5f88\u65b9\u4fbf"}),"\n",(0,r.jsxs)(n.p,{children:["\u6240\u4ee5\u4e00\u5b9a\u8981\u8d26\u53f7 is-a \u548c has-a\u7684\u5173\u7cfb \u4e00\u5b9a\u786e\u5b9a\u662f a\u662fb\u7684\u4e00\u79cd\u7684\u65f6\u5019\u624d\u53ef\u4ee5\u4f7f\u7528 \u7ee7\u627f ",(0,r.jsx)(n.strong,{children:"\u5426\u5219\u5c3d\u53ef\u80fd\u7684\u4f7f\u7528\u7ec4\u5408"})," \u4e5f\u5c31\u662fb\u91cc\u9762\u6709\u4e00\u4e2aa\u7684\u6210\u5458\u53d8\u91cf"]}),"\n",(0,r.jsx)(n.h3,{id:"function",children:"Function"}),"\n",(0,r.jsx)(n.h4,{id:"parameter-ordering",children:"parameter Ordering"}),"\n",(0,r.jsx)(n.p,{children:"\u51fd\u6570\u7684\u53d8\u91cf\u7684\u987a\u5e8f: input, \u7136\u540e\u662foutput"}),"\n",(0,r.jsx)(n.p,{children:"\u5c3d\u91cf\u628a\u4e00\u4e2a\u51fd\u6570\u63a7\u5236\u572840\u884c\u4ee5\u5185"}),"\n",(0,r.jsx)(n.h4,{id:"reference-arguments",children:"reference Arguments"}),"\n",(0,r.jsx)(n.p,{children:"\u6240\u6709\u901a\u8fc7\u5f15\u7528\u4f20\u53c2\u7684\u53d8\u91cf\u90fd\u9700\u8981\u52a0\u4e0aconst, \u4e5f\u5c31\u662f const type &in"}),"\n",(0,r.jsx)(n.p,{children:"\u5c3d\u53ef\u80fd\u7684input argument \u7528value \u6216\u8005 const reference(\u5f53\u7136\u5982\u679c\u8fd9\u4e2a\u53d8\u91cf\u5c31\u662f\u6307\u9488, \u90a3\u4e48\u4f20\u8fdb\u6765\u7684\u65f6\u5019\u5c31\u7528\u6307\u9488),  \u7136\u540eoutput argument \u7528\u6307\u9488"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd8\u6709\u5c31\u662f\u5982\u679c\u53d8\u91cf\u9700\u8981\u4f20\u8fdb\u6765NULL\u7684\u65f6\u5019, \u53ef\u80fd\u4f1a\u7528const T*"}),"\n",(0,r.jsx)(n.h4,{id:"function-overloading",children:"function overloading"}),"\n",(0,r.jsx)(n.p,{children:"\u5c3d\u53ef\u80fd\u7684\u4e0d\u8981\u4f7f\u7528 function overloading, \u56e0\u4e3afunction overloading \u589e\u52a0\u4e86c++ \u7684\u590d\u6742\u6027. \u7279\u522b\u662f\u5f53\u7ee7\u627f\u7684\u65f6\u5019, \u5b50\u7c7b\u53ea\u5b9e\u73b0\u4e86\u7236\u7c7b\u7684\u67d0\u4e00\u4e2afunction \u7684\u65f6\u5019, \u8fd9\u6837\u4ee3\u7801\u7684\u590d\u6742\u5ea6\u5c31\u66f4\u9ebb\u70e6\u4e86. \u56e0\u4e3a\u4e0d\u77e5\u9053\u91cd\u8f7d\u7684\u662f\u54ea\u4e00\u4e2a\u51fd\u6570, \u56e0\u6b64"}),"\n",(0,r.jsx)(n.p,{children:"\u5c3d\u53ef\u80fd\u7684\u4e0d\u8981\u4f7f\u7528function overloading, \u5f53\u9047\u5230\u51fd\u6570\u9700\u8981\u4e0d\u7528\u7684\u53d8\u91cf\u7c7b\u578b\u7684\u65f6\u5019, \u53ef\u4ee5\u5199\u6210\u8fd9\u79cdAppendString(), AppendInt() \u8fd9\u79cd"}),"\n",(0,r.jsx)(n.h4,{id:"default-value",children:"default value"}),"\n",(0,r.jsx)(n.p,{children:"\u5141\u8bb8\u5728\u975enon-virtual \u51fd\u6570\u91cc\u9762\u4f7f\u7528 default value"}),"\n",(0,r.jsx)(n.h3,{id:"scoping",children:"scoping"}),"\n",(0,r.jsx)(n.h4,{id:"nonmember-static-member-global-function",children:"Nonmember, static member, global function"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u6709\u4e00\u4e2a\u51fd\u6570\u548c\u4e00\u4e2a\u7c7b\u7684\u5bf9\u8c61\u91cc\u9762\u7684\u5185\u5bb9\u5e76\u4e0d\u76f8\u5173"}),"\n",(0,r.jsx)(n.p,{children:"\u90a3\u4e48\u8fd9\u4e2a\u65f6\u5019\u6709\u4e24\u4e2a\u9009\u62e9, \u53ef\u4ee5\u5b9a\u4e49\u6210class static member function, nonmember function. \u90a3\u4e48\u8fd9\u4e2a\u65f6\u5019\u5982\u4f55\u9009\u62e9?"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u8fd9\u4e2a\u51fd\u6570\u548c\u8fd9\u4e2a\u5bf9\u8c61\u5f3a\u76f8\u5173, \u6bd4\u5982\u662f\u5efa\u7acb\u4e00\u4e2a\u8fd9\u4e2a\u5bf9\u8c61, \u6216\u8005\u64cd\u4f5c\u8fd9\u4e2a\u7c7b\u7684\u9759\u6001\u6210\u5458\u51fd\u6570\u7684\u65f6\u5019, \u5c06\u8fd9\u4e2a\u51fd\u6570\u58f0\u660e\u6210class static member function"}),"\n",(0,r.jsx)(n.p,{children:"\u5426\u5219\u5c06\u8fd9\u4e2a\u51fd\u6570\u58f0\u660e\u6210nonmember function, \u7136\u540e\u7528namespace \u9694\u79bb\u5f00\u6765"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u6709\u4e00\u4e2a\u51fd\u6570\u53ea\u5728\u67d0\u4e00\u4e2a.cc \u6587\u4ef6\u91cc\u9762\u4f7f\u7528, \u90a3\u4e48\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u51fd\u6570\u653e\u5728unnamed namespace \u6216\u8005\u7528static \u58f0\u660e static int foo() \u8fd9\u79cd"}),"\n",(0,r.jsx)(n.h3,{id:"other",children:"other"}),"\n",(0,r.jsx)(n.h4,{id:"\u5173\u4e8eexception-\u7684\u4f7f\u7528",children:"\u5173\u4e8eexception \u7684\u4f7f\u7528"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["pros:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"exception \u53ef\u4ee5\u53d1\u73b0\u66f4\u6df1\u5c42\u6b21\u7684\u9519\u8bef, \u6bd4\u5982a()->b()->c()->d() \u90a3\u4e48\u5728d\u91cc\u9762\u629b\u51fa\u7684exception \u5728a\u91cc\u9762\u662f\u53ef\u4ee5\u76f4\u63a5\u6355\u83b7\u7684"}),"\n",(0,r.jsx)(n.li,{children:"\u6bd4\u5982\u5728c++ \u7684construction \u91cc\u9762, \u6211\u4eec\u662f\u65e0\u6cd5\u77e5\u9053\u8fd9\u4e2aconstruction \u662f\u5426\u6784\u9020\u6210\u529f,"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["cons","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u200b"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"\u5173\u4e8e\u8fd4\u56de\u503c",children:"\u5173\u4e8e\u8fd4\u56de\u503c"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u5728\u4e00\u4e2a\u51fd\u6570\u5185\u90e8\u8c03\u7528"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"brace-initializer-list",children:"brace initializer List"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728c++11 \u91cc\u9762\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7"," \u6765\u521d\u59cb\u5316\u4e00\u4e2alist, \u8fd9\u4e2a\u662f\u5728c++ 11 \u4e4b\u524d\u90fd\u4e0d\u53ef\u4ee5\u7684, \u6bd4\u5982:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c++",children:"int main()\n{\n  std::vector<int> v{1, 2, 3};\n  std::map<int, int> mp{{1, 2}, {1, 3}, {1, 4}};\n  return 0;\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"sizeof",children:"sizeof"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4f7f\u7528sizeof \u7684\u65f6\u5019\u5c3d\u53ef\u80fd\u7684\u53bbsizeof(varname), \u800c\u4e0d\u662f\u53bbsizeof(type).  \u56e0\u6b64\u8fd9\u4e2avarname \u968f\u65f6\u4f1a\u66f4\u65b0, \u5982\u679cvarname \u8fd9\u4e2a\u53d8\u91cf\u88ab\u8d4b\u503c\u7ed9\u5176\u4ed6\u5bf9\u8c61\u7684\u65f6\u5019"}),"\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610fsizeof \u7684\u65f6\u5019\u8003\u8651\u5bf9\u9f50\u7684\u95ee\u9898"}),"\n",(0,r.jsx)(n.h4,{id:"run-time-type-informationrtti",children:"Run-Time Type Information(RTTI)"}),"\n",(0,r.jsx)(n.p,{children:"c++ \u5141\u8bb8\u5728\u8fd0\u884c\u7684\u8fc7\u7a0b\u4e2d\u4f7f\u7528typeid, dynamic_cast \u6765\u68c0\u67e5\u4e00\u4e2a\u53d8\u91cf\u7684\u7c7b\u578b, \u901a\u8fc7dynamic_cast \u5728\u7c7b\u578b\u8f6c\u6362\u7684\u65f6\u5019\u8fdb\u884c\u68c0\u67e5, \u53ea\u5141\u8bb8\u7236\u7c7b\u7684\u6307\u9488\u6307\u5411\u5b50\u7c7b, \u800c\u4e0d\u5141\u8bb8\u5b50\u7c7b\u7684\u6307\u9488\u6307\u5411\u7236\u7c7b"}),"\n",(0,r.jsx)(n.p,{children:"\u4f46\u662f\u5176\u5b9e\u7528RTTI \u7684\u4ee3\u7801\u90fd\u53ef\u4ee5\u7528\u5176\u4ed6\u7684\u65b9\u5f0f\u6765\u5199, \u800cRTTI \u4e0d\u662f\u5f88\u9ad8\u6548, \u56e0\u6b64\u5c3d\u53ef\u80fd\u7528 virtual method, \u6216\u8005 Visitor pattern \u6a21\u5f0f\u6765\u5b9e\u73b0\u6bd4\u8f83\u597d"}),"\n",(0,r.jsx)(n.h4,{id:"cast",children:"cast"}),"\n",(0,r.jsx)(n.p,{children:"\u5c3d\u53ef\u80fd\u7684\u4f7f\u7528 c++ \u7684static_cast, const_cast, reinterpret_cast \u800c\u4e0d\u662f\u7528c \u91cc\u9762\u7684cast"}),"\n",(0,r.jsx)(n.h4,{id:"stream",children:"stream"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4e3a\u4e86debug\u60f3\u8981\u6253\u5370\u4e00\u4e2a\u5bf9\u8c61\u5185\u90e8\u7684\u7ec6\u8282, \u90a3\u4e48\u7ecf\u5e38\u4f1a\u63d0\u4f9b\u4e00\u4e2aDebugString() \u662f\u6700\u7ecf\u5e38\u7684"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0d\u8981\u4f7f\u7528stream \u4f5c\u4e3a\u5916\u90e8\u7528\u6237\u7684IO, stream \u6027\u80fd\u8fd8\u662f\u4e0d\u884c\u7684"}),"\n",(0,r.jsx)(n.h4,{id:"friend",children:"Friend"}),"\n",(0,r.jsx)(n.p,{children:"\u5141\u8bb8\u4f7f\u7528 Friend class, function"}),"\n",(0,r.jsx)(n.p,{children:"Friend class \u867d\u7136\u4f1a\u7834\u574f\u4e86\u7c7b\u5c01\u88c5, \u5141\u8bb8\u5916\u90e8\u7c7b\u76f4\u63a5\u8bbf\u95ee\u5f53\u524d\u8fd9\u4e2a\u7c7b\u91cc\u9762\u7684\u79c1\u6709\u6210\u5458, \u5e38\u89c1\u7684\u7528\u6cd5\u5c31\u662fFooBuilder \u5e94\u8be5\u80fd\u591f\u8bbf\u95eeFoo \u91cc\u9762\u7684\u79c1\u6709\u6210\u5458. \u5982\u679c\u6ca1\u6709Friend class, \u8981\u4e48\u628aFoo \u7684\u6210\u5458\u90fd\u8bbe\u7f6e\u6210public, \u8981\u4e48\u7ed9\u6240\u6709\u7684\u6210\u5458\u53d8\u91cf\u90fd\u6dfb\u52a0get, set \u51fd\u6570. \u8fd8\u662f\u5f88\u4e0d\u65b9\u4fbf\u7684."}),"\n",(0,r.jsx)(n.p,{children:"Friend class \u53ea\u662f\u8ba9\u67d0\u4e00\u4e2a\u7c7b\u53ef\u4ee5\u8bbf\u95ee\u8fd9\u4e2a\u7c7b, \u8fd8\u662f\u6bd4\u8ba9\u6240\u6709\u7684\u6210\u5458\u53d8\u91cf\u90fdpublic \u6765\u8bf4, \u5c01\u88c5\u66f4\u597d\u4e00\u4e9b"}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u6b64Friend class \u9700\u8981\u770b\u5230Foo \u7684\u79c1\u6709\u53d8\u91cf, \u56e0\u6b64\u7ecf\u5e38\u5c06Friend class \u653e\u5728\u540c\u4e00\u4e2a\u5934\u6587\u4ef6\u91cc\u9762"}),"\n",(0,r.jsx)(n.h4,{id:"use-of-const",children:"use of const"}),"\n",(0,r.jsx)(n.p,{children:"\u80fd\u7528const \u7684\u5730\u65b9\u5c3d\u53ef\u80fd\u7684\u4f7f\u7528const"}),"\n",(0,r.jsx)(n.h4,{id:"integer-type",children:"Integer type"}),"\n",(0,r.jsxs)(n.p,{children:["\u7528 ",(0,r.jsx)(n.code,{children:"<stdint.h>"})," \u91cc\u9762\u5b9a\u4e49\u7684int32_t, int64_t \u7b49\u7b49, \u800c\u4e0d\u9002\u7528short, long, long long \u8fd9\u79cd\u7c7b\u578b, \u56e0\u4e3ashort, long \u7b49\u662f\u6839\u636e\u7f16\u8bd1\u5668\u548c\u5e73\u53f0\u662f\u4e0d\u4e00\u6837\u7684"]}),"\n",(0,r.jsx)(n.h4,{id:"0-and-nullptrnull",children:"0 and nullptr/NULL"}),"\n",(0,r.jsx)(n.p,{children:"Use 0 for integers, 0.0 for reals, nullptr (or NULL) for pointers, and '\\0' for chars."}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u652f\u6301c++11 \u7684\u9879\u76ee\u91cc\u9762\u5c3d\u53ef\u80fd\u4f7f\u7528nullptr"}),"\n",(0,r.jsx)(n.h3,{id:"comments",children:"Comments"}),"\n",(0,r.jsx)(n.h4,{id:"todo-comment",children:"TODO comment"}),"\n",(0,r.jsx)(n.p,{children:"\u5199TODO comment \u7684\u65f6\u5019\u8bb0\u5f97\u5199\u4e0a\u8c01\u5199\u7684\u8fd9\u4e2aTODO"}),"\n",(0,r.jsxs)(n.p,{children:["// TODO(",(0,r.jsx)(n.a,{href:"mailto:kl@gmail.com",children:"kl@gmail.com"}),'): Use a "*" here for concatenation operator.']}),"\n",(0,r.jsx)(n.h3,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,r.jsx)(n.p,{children:"\u6700\u540e\u53ef\u4ee5\u7528 cpplint.py \u8dd1\u4e00\u4e0b, \u5c3d\u53ef\u80fd\u628a\u9519\u8bef\u662f4, \u4ee5\u53ca4\u4ee5\u4e0a\u7684\u7ed9\u6392\u9664\u6389"})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var r=i(6540);const l={},t=r.createContext(l);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);