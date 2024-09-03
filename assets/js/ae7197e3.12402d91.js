"use strict";(self.webpackChunkPikiwiDB_Pika_=self.webpackChunkPikiwiDB_Pika_||[]).push([[3365],{7229:(e,d,i)=>{i.r(d),i.d(d,{assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>l,metadata:()=>n,toc:()=>h});var s=i(4848),t=i(8453);const l={title:"\u5dee\u5f02\u5316\u547d\u4ee4",sidebar_position:50},r=void 0,n={id:"\u4f7f\u7528\u4e0e\u8fd0\u7ef4/\u5dee\u5f02\u5316\u547d\u4ee4/index",title:"\u5dee\u5f02\u5316\u547d\u4ee4",description:"config [get | set | rewrite]",source:"@site/docs/\u4f7f\u7528\u4e0e\u8fd0\u7ef4/\u5dee\u5f02\u5316\u547d\u4ee4/index.md",sourceDirName:"\u4f7f\u7528\u4e0e\u8fd0\u7ef4/\u5dee\u5f02\u5316\u547d\u4ee4",slug:"/\u4f7f\u7528\u4e0e\u8fd0\u7ef4/\u5dee\u5f02\u5316\u547d\u4ee4/",permalink:"/docs/\u4f7f\u7528\u4e0e\u8fd0\u7ef4/\u5dee\u5f02\u5316\u547d\u4ee4/",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenAtomFoundation/PikiwiDB-Pika--Website/tree/main/docs/\u4f7f\u7528\u4e0e\u8fd0\u7ef4/\u5dee\u5f02\u5316\u547d\u4ee4/index.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"\u5dee\u5f02\u5316\u547d\u4ee4",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"\u7ba1\u7406\u6307\u4ee4",permalink:"/docs/\u4f7f\u7528\u4e0e\u8fd0\u7ef4/\u7ba1\u7406\u6307\u4ee4/"},next:{title:"\u8ba2\u9605",permalink:"/docs/\u4f7f\u7528\u4e0e\u8fd0\u7ef4/\u8ba2\u9605/"}},c={},h=[{value:"config [get | set | rewrite]",id:"config-get--set--rewrite",level:4},{value:"purgelogsto [write2file-name]",id:"purgelogsto-write2file-name",level:3},{value:"client list",id:"client-list",level:3},{value:"client list order by [addr|idle]",id:"client-list-order-by-addridle",level:3},{value:"client kill all",id:"client-kill-all",level:3},{value:"\u6162\u65e5\u5fd7(slowlog)",id:"\u6162\u65e5\u5fd7slowlog",level:3},{value:"bgsave",id:"bgsave",level:3},{value:"dumpoff",id:"dumpoff",level:3},{value:"delbackup",id:"delbackup",level:3},{value:"compact",id:"compact",level:3},{value:"compact [string | hash | set | zset | list ]",id:"compact-string--hash--set--zset--list-",level:3},{value:"compact $db [string | hash | set | zset | list ]",id:"compact-db-string--hash--set--zset--list-",level:3},{value:"flushdb [string | hash | set | zset | list ]",id:"flushdb-string--hash--set--zset--list-",level:3},{value:"keys pattern [string | hash | set | zset | list ]",id:"keys-pattern-string--hash--set--zset--list-",level:3},{value:"slaveof ip port [write2file-name] [write2file-pos] [force]",id:"slaveof-ip-port-write2file-name-write2file-pos-force",level:3},{value:"sort",id:"sort",level:3},{value:"dbslaveof db[0 ~ 7] filenum offset",id:"dbslaveof-db0--7-filenum-offset",level:3},{value:"pkscanrange type key_start key_end [MATCH pattern] [LIMIT limit]",id:"pkscanrange-type-key_start-key_end-match-pattern-limit-limit",level:3},{value:"pkrscanrange type key_start key_end [MATCH pattern] [LIMIT limit]",id:"pkrscanrange-type-key_start-key_end-match-pattern-limit-limit",level:3},{value:"pkhscanrange key field_start field_end  [MATCH pattern] [LIMIT limit]",id:"pkhscanrange-key-field_start-field_end--match-pattern-limit-limit",level:3},{value:"pkhrscanrange key field_start field_end  [MATCH pattern] [LIMIT limit]",id:"pkhrscanrange-key-field_start-field_end--match-pattern-limit-limit",level:3},{value:"diskrecovery",id:"diskrecovery",level:3},{value:"clearreplicationid",id:"clearreplicationid",level:3},{value:"DisableWal",id:"disablewal",level:3}];function a(e){const d={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.h4,{id:"config-get--set--rewrite",children:"config [get | set | rewrite]"}),"\n",(0,s.jsx)(d.p,{children:"\u5728\u670d\u52a1\u5668\u914d\u7f6e\u4e2d\uff0c\u652f\u6301\u53c2\u6570\u7684get\u3001set\u3001rewrite\uff0c\u652f\u6301\u7684\u53c2\u6570\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"-"}),(0,s.jsx)(d.th,{children:"GET"}),(0,s.jsx)(d.th,{children:"SET"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"binlog-file-size"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"compact-cron"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"compact-interval"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"compression"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"daemonize"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"db-path"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"db-sync-path"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"db-sync-speed"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"double-master-ip"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"double-master-port"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"double-master-sid"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"dump-expire"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"dump-path"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"dump-prefix"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"expire-logs-days"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"expire-logs-nums"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"identify-binlog-type"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"loglevel"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"log-path"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"masterauth"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"max-background-compactions"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"max-background-flushes"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"max-bytes-for-level-multiplier"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"max-cache-files"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"maxclients"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"maxmemory"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"network-interface"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"pidfile"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"port"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"requirepass"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"root-connection-num"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"slaveof"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"slave-priority"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"slave-read-only"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"slotmigrate"}),(0,s.jsx)(d.td,{children:"o (\u5c0f\u4e8e 3.0.0)"}),(0,s.jsx)(d.td,{children:"o (\u5c0f\u4e8e 3.0.0)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"slowlog-log-slower-than"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"slowlog-write-errorlog"}),(0,s.jsx)(d.td,{children:"o (\u5c0f\u4e8e 3.0.2)"}),(0,s.jsx)(d.td,{children:"o(\u5c0f\u4e8e3.0.2)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"sync-buffer-size"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"sync-thread-num"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"target-file-size-base"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"thread-num"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"timeout"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"userblacklist"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"userpass"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"write-buffer-size"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"max-cache-statistic-keys"}),(0,s.jsx)(d.td,{children:"o(\u5c0f\u4e8e3.0.6)"}),(0,s.jsx)(d.td,{children:"o(\u5c0f\u4e8e3.0.6)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"small-compaction-threshold"}),(0,s.jsx)(d.td,{children:"o(\u5c0f\u4e8e3.0.6)"}),(0,s.jsx)(d.td,{children:"o(\u5c0f\u4e8e3.0.6)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"databases"}),(0,s.jsx)(d.td,{children:"o(\u5c0f\u4e8e3.1.0)"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"write-binlog"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"thread-pool-size"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"slowlog-max-len"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"share-block-cache"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"optimize-filters-for-hits"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"level-compaction-dynamic-level-bytes"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"cache-index-and-filter-blocks"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"block-size"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"block-cache"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"x"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"sync-window-size"}),(0,s.jsx)(d.td,{children:"o"}),(0,s.jsx)(d.td,{children:"o"})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"purgelogsto-write2file-name",children:"purgelogsto [write2file-name]"}),"\n",(0,s.jsx)(d.p,{children:"purgelogsto\u4e3apika\u539f\u521b\u547d\u4ee4, \u529f\u80fd\u4e3a\u624b\u52a8\u6e05\u7406\u65e5\u5fd7, \u7c7b\u4f3cmysql\u7684purge master logs to\u547d\u4ee4, \u8be5\u547d\u4ee4\u6709\u591a\u91cd\u68c0\u6d4b\u673a\u5236\u4ee5\u786e\u4fdd\u65e5\u5fd7\u4e00\u5b9a\u4e3a\u5b89\u5168\u6e05\u7406"}),"\n",(0,s.jsx)(d.h3,{id:"client-list",children:"client list"}),"\n",(0,s.jsx)(d.p,{children:"\u4e0eredis\u76f8\u6bd4, \u5c55\u793a\u7684\u4fe1\u606f\u5c11\u4e8eredis"}),"\n",(0,s.jsx)(d.h3,{id:"client-list-order-by-addridle",children:"client list order by [addr|idle]"}),"\n",(0,s.jsx)(d.p,{children:"pika\u539f\u521b\u547d\u4ee4\uff0c\u529f\u80fd\u4e3a\u6309\u7167ip address \u6216\u8005 connection idle\u65f6\u95f4\u6392\u5e8f"}),"\n",(0,s.jsx)(d.h3,{id:"client-kill-all",children:"client kill all"}),"\n",(0,s.jsx)(d.p,{children:"pika\u539f\u521b\u547d\u4ee4, \u529f\u80fd\u4e3a\u6740\u6b7b\u5f53\u524d\u6240\u6709\u94fe\u63a5\uff08\u4e0d\u5305\u62ec\u540c\u6b65\u8fdb\u7a0b\u4f46\u5305\u542b\u81ea\u5df1\uff09"}),"\n",(0,s.jsx)(d.h3,{id:"\u6162\u65e5\u5fd7slowlog",children:"\u6162\u65e5\u5fd7(slowlog)"}),"\n",(0,s.jsx)(d.p,{children:"\u4e0eredis\u4e0d\u540c, pika\u7684\u6162\u65e5\u5fd7\u4e0d\u4ec5\u5b58\u653e\u5185\u5b58\u4e2d\u5141\u8bb8\u901a\u8fc7slow log\u547d\u4ee4\u67e5\u770b\uff0c\u540c\u65f6\u4e5f\u5141\u8bb8\u5b58\u653e\u5728error log\u4e2d\u5e76\u65e0\u6761\u6570\u9650\u5236\u65b9\u4fbf\u63a5\u5206\u6790\uff0c\u4f46\u9700\u8981\u6253\u5f00slowlog-write-errorlog\u53c2\u6570"}),"\n",(0,s.jsx)(d.h3,{id:"bgsave",children:"bgsave"}),"\n",(0,s.jsx)(d.p,{children:"\u7c7b\u4f3credis\u7684bgsave, \u5148\u751f\u6210\u4e00\u4e2a\u5feb\u7167, \u7136\u540e\u518d\u5c06\u5feb\u7167\u6570\u636e\u8fdb\u884c\u5907\u4efd, \u5907\u4efd\u6587\u4ef6\u5b58\u653e\u5728dump\u76ee\u5f55\u4e0b"}),"\n",(0,s.jsx)(d.h3,{id:"dumpoff",children:"dumpoff"}),"\n",(0,s.jsx)(d.p,{children:"\u5f3a\u884c\u7ec8\u6b62\u6b63\u5728\u6267\u884c\u7684dump\u8fdb\u7a0b(bgsave), \u6267\u884c\u8be5\u547d\u4ee4\u540e\u5907\u4efd\u4f1a\u7acb\u5373\u505c\u6b62\u7136\u540e\u5728dump\u76ee\u5f55\u4e0b\u751f\u6210\u4e00\u4e2adump-failed\u6587\u4ef6\u5939(Deprecated from v2.0)"}),"\n",(0,s.jsx)(d.h3,{id:"delbackup",children:"delbackup"}),"\n",(0,s.jsx)(d.p,{children:"\u5220\u9664dump\u76ee\u5f55\u4e0b\u9664\u6b63\u5728\u4f7f\u7528\uff08\u5168\u540c\u6b65\u4e2d\uff09\u7684db\u5feb\u7167\u5916\u7684\u5176\u4ed6\u5feb\u7167"}),"\n",(0,s.jsx)(d.h3,{id:"compact",children:"compact"}),"\n",(0,s.jsx)(d.p,{children:"\u7acb\u5373\u89e6\u53d1\u5f15\u64ce\u5c42(rocksdb)\u6240\u6709\u6570\u636e\u7ed3\u6784\u6267\u884c\u5168\u91cfcompact\u64cd\u4f5c, \u5168\u91cfcompact\u80fd\u591f\u901a\u8fc7sst\u6587\u4ef6\u7684\u5408\u5e76\u6d88\u9664\u5df2\u5220\u9664\u6216\u8fc7\u671f\u4f46\u672a\u5373\u65f6\u6e05\u7406\u7684\u6570\u636e, \u80fd\u591f\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u964d\u4f4e\u6570\u636e\u4f53\u79ef, \u9700\u8981\u6ce8\u610f\u7684\u662f, \u5168\u91cfcompact\u4f1a\u6d88\u8017\u4e00\u5b9aio\u8d44\u6e90"}),"\n",(0,s.jsx)(d.h3,{id:"compact-string--hash--set--zset--list-",children:"compact [string | hash | set | zset | list ]"}),"\n",(0,s.jsx)(d.p,{children:"\u7acb\u5373\u89e6\u53d1\u5f15\u64ce\u5c42(rocksdb)\u5bf9\u6307\u5b9a\u6570\u636e\u7ed3\u6784\u6267\u884c\u5168\u91cfcompact\u64cd\u4f5c, \u6307\u5b9a\u6570\u636e\u7ed3\u6784\u7684\u5168\u91cfcompact\u80fd\u591f\u901a\u8fc7sst\u6587\u4ef6\u7684\u5408\u5e76\u6d88\u9664\u5df2\u5220\u9664\u6216\u8fc7\u671f\u4f46\u672a\u5373\u65f6\u6e05\u7406\u7684\u6570\u636e, \u80fd\u591f\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u964d\u4f4e\u8be5\u7ed3\u6784\u6570\u636e\u7684\u6570\u636e\u4f53\u79ef, \u9700\u8981\u6ce8\u610f\u7684\u662f, \u5168\u91cfcompact\u4f1a\u6d88\u8017\u4e00\u5b9aio\u8d44\u6e90"}),"\n",(0,s.jsx)(d.h3,{id:"compact-db-string--hash--set--zset--list-",children:"compact $db [string | hash | set | zset | list ]"}),"\n",(0,s.jsx)(d.p,{children:"\u5bf9\u6307\u5b9a\u7684db\u8fdb\u884c\u5168\u91cfcompact\u3002\u4f8b\u5982 compact db0 all\u4f1a\u5bf9db0\u4e0a\u6240\u6709\u6570\u636e\u7ed3\u6784\u8fdb\u884c\u5168\u91cfcompact\u3002"}),"\n",(0,s.jsx)(d.h3,{id:"flushdb-string--hash--set--zset--list-",children:"flushdb [string | hash | set | zset | list ]"}),"\n",(0,s.jsx)(d.p,{children:"flushdb\u547d\u4ee4\u5141\u8bb8\u53ea\u6e05\u9664\u6307\u5b9a\u6570\u636e\u7ed3\u6784\u7684\u6240\u6709\u6570\u636e, \u5982\u9700\u5220\u9664\u6240\u6709\u6570\u636e\u8bf7\u4f7f\u7528flushall"}),"\n",(0,s.jsx)(d.h3,{id:"keys-pattern-string--hash--set--zset--list-",children:"keys pattern [string | hash | set | zset | list ]"}),"\n",(0,s.jsx)(d.p,{children:"keys\u547d\u4ee4\u5141\u8bb8\u53ea\u8f93\u51fa\u6307\u5b9a\u6570\u636e\u7ed3\u6784\u7684\u6240\u6709key, \u5982\u9700\u8f93\u51fa\u6240\u6709\u7ed3\u6784\u7684key\u8bf7\u4e0d\u8981\u4f7f\u7528\u53c2\u6570"}),"\n",(0,s.jsx)(d.h3,{id:"slaveof-ip-port-write2file-name-write2file-pos-force",children:"slaveof ip port [write2file-name] [write2file-pos] [force]"}),"\n",(0,s.jsx)(d.p,{children:"force\u53c2\u6570\u7528\u4e8e\u89e6\u53d1\u5f3a\u884c\u5168\u91cf\u540c\u6b65(\u9002\u7528\u4e8e\u4e3b\u5e93write2file\u88ab\u6e05\u7406\u65e0\u6cd5\u4e3a\u4ece\u5e93\u63d0\u4f9b\u589e\u91cf\u540c\u6b65\u7684\u573a\u666f), \u5168\u91cf\u540c\u6b65\u540epika\u4f1a\u81ea\u52a8\u5207\u6362\u81f3\u589e\u91cf\u540c\u6b65"}),"\n",(0,s.jsx)(d.h3,{id:"sort",children:"sort"}),"\n",(0,s.jsx)(d.p,{children:"pika \u4e0d\u652f\u6301 sort \u547d\u4ee4"}),"\n",(0,s.jsx)(d.h3,{id:"dbslaveof-db0--7-filenum-offset",children:"dbslaveof db[0 ~ 7] filenum offset"}),"\n",(0,s.jsx)(d.p,{children:"\u9700\u8981\u4e0eslaveof\u914d\u5408\u4f7f\u7528\u3002dbslaveof\u547d\u4ee4\u5141\u8bb8\u901a\u8fc7\u6307\u5b9awrite2file(binlog)\u7684\u6587\u4ef6\u540d\u79f0\u53ca\u540c\u6b65\u4f4d\u7f6e\u6765\u5b9e\u73b0\u589e\u91cf\u540c\u6b65\u3002\u8fd9\u79cd\u64cd\u4f5c\u5206\u4e24\u6b65\uff1a\u7b2c\u4e00\u6b65\u6b63\u5e38slaveof ip port \u4f1a\u4e0emaster\u5339\u914dmeta\u662f\u5426\u4e00\u81f4\uff08db\u6570\u76ee\u53ca\u7f16\u53f7\u662f\u5426\u4e00\u81f4\uff09\u3002\u6b64\u65f6slave\u8282\u70b9binlog\u540c\u6b65\u53ef\u80fd\u8fd8\u662f\u5f02\u5e38\u72b6\u6001\u3002\u7b2c\u4e8c\u6b65\u6267\u884cdbslaveof \u8bbe\u7f6e\u5bf9\u5e94db\u7684\u540c\u6b65\u70b9\u4f4d\u3002"}),"\n",(0,s.jsx)(d.h3,{id:"pkscanrange-type-key_start-key_end-match-pattern-limit-limit",children:"pkscanrange type key_start key_end [MATCH pattern] [LIMIT limit]"}),"\n",(0,s.jsx)(d.p,{children:'\u5bf9\u6307\u5b9a\u6570\u636e\u7ed3\u6784\u8fdb\u884c\u6b63\u5411scan, \u5217\u51fa\u5904\u4e8e\u533a\u95f4 [key_start, key_end] \u7684Key\u5217\u8868(\u5982\u679ctype\u4e3astring_with_value\uff0c\u5219\u5217\u51fa\u7684\u662fkey-value\u5217\u8868) ("", ""] \u8868\u793a\u6574\u4e2a\u533a\u95f4\u3002'}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsx)(d.li,{children:"type\uff1a \u6307\u5b9a\u9700\u8981scan\u6570\u636e\u7ed3\u6784\u7684\u7c7b\u578b\uff0c{ string_with_value | string | hash| list | zset | set }"}),"\n",(0,s.jsx)(d.li,{children:"key_start\uff1a \u8fd4\u56de\u7684\u8d77\u59cbKey, \u7a7a\u5b57\u7b26\u4e32\u8868\u793a -inf(\u65e0\u9650\u5c0f)"}),"\n",(0,s.jsx)(d.li,{children:"key_end\uff1a\u8fd4\u56de\u7684\u7ed3\u675fKey, \u7a7a\u5b57\u7b26\u4e32\u8868\u793a +inf(\u65e0\u9650\u5927)"}),"\n"]}),"\n",(0,s.jsx)(d.h3,{id:"pkrscanrange-type-key_start-key_end-match-pattern-limit-limit",children:"pkrscanrange type key_start key_end [MATCH pattern] [LIMIT limit]"}),"\n",(0,s.jsx)(d.p,{children:"\u7c7b\u4f3c\u4e8epkscanrange, \u9006\u5e8f"}),"\n",(0,s.jsx)(d.h3,{id:"pkhscanrange-key-field_start-field_end--match-pattern-limit-limit",children:"pkhscanrange key field_start field_end  [MATCH pattern] [LIMIT limit]"}),"\n",(0,s.jsx)(d.p,{children:"\u5217\u51fa\u6307\u5b9ahash table\u4e2d\u5904\u4e8e\u533a\u95f4 [field_start, field_end] \u7684 field-value \u5217\u8868."}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsx)(d.li,{children:"key\uff1ahash table\u5bf9\u5e94\u7684key"}),"\n",(0,s.jsx)(d.li,{children:"field_start\uff1a \u8fd4\u56de\u7684\u8d77\u59cbField, \u7a7a\u5b57\u7b26\u4e32\u8868\u793a -inf(\u65e0\u9650\u5c0f)"}),"\n",(0,s.jsx)(d.li,{children:"field_end\uff1a\u8fd4\u56de\u7684\u7ed3\u675fField, \u7a7a\u5b57\u7b26\u4e32\u8868\u793a +inf(\u65e0\u9650\u5927)"}),"\n"]}),"\n",(0,s.jsx)(d.h3,{id:"pkhrscanrange-key-field_start-field_end--match-pattern-limit-limit",children:"pkhrscanrange key field_start field_end  [MATCH pattern] [LIMIT limit]"}),"\n",(0,s.jsx)(d.p,{children:"\u7c7b\u4f3c\u4e8epkhscanrange, \u9006\u5e8f"}),"\n",(0,s.jsx)(d.h3,{id:"diskrecovery",children:"diskrecovery"}),"\n",(0,s.jsxs)(d.p,{children:["Pika \u539f\u521b\u547d\u4ee4\uff0c\u529f\u80fd\u4e3a\u5f53\u78c1\u76d8\u610f\u5916\u5199\u6ee1\u540e\uff0cRocksDB \u4f1a\u8fdb\u5165\u5199\u4fdd\u62a4\u72b6\u6001\uff0c\u5f53\u6211\u4eec\u5c06\u7a7a\u95f4\u8c03\u6574\u4e3a\u5145\u8db3\u7a7a\u95f4\u65f6\uff0c\u8fd9\u4e2a\u547d\u4ee4\u53ef\u4ee5\u5c06 RocksDB \u7684\u5199\u4fdd\u62a4\u72b6\u6001\u89e3\u9664\uff0c\u53d8\u4e3a\u53ef\u4ee5\u7ee7\u7eed\u5199\u7684\u72b6\u6001, \u907f\u514d\u4e86 Pika \u56e0\u4e3a\u78c1\u76d8\u5199\u6ee1\u540e\u9700\u8981\u91cd\u542f\u624d\u80fd\u6062\u590d\u5199\u7684\u60c5\u51b5\uff0c\u6267\u884c\u6210\u529f\u65f6\u8fd4\u56de OK\uff0c\u5982\u679c\u5f53\u524d\u78c1\u76d8\u7a7a\u95f4\u4f9d\u7136\u4e0d\u8db3\uff0c\u6267\u884c\u8fd9\u4e2a\u547d\u4ee4\u8fd4\u56de",(0,s.jsx)(d.code,{children:'"The available disk capacity is insufficient'}),"\uff0c\u8be5\u547d\u4ee4\u6267\u884c\u65f6\u4e0d\u9700\u8981\u989d\u5916\u53c2\u6570\uff0c\u53ea\u9700\u8981\u6267\u884c diskrecovery \u5373\u53ef\u3002"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-bash",children:"> diskrecovery \n> OK\n"})}),"\n",(0,s.jsx)(d.h3,{id:"clearreplicationid",children:"clearreplicationid"}),"\n",(0,s.jsx)(d.p,{children:"Pika \u539f\u521b\u547d\u4ee4\uff0c\u529f\u80fd\u662f\u6e05\u7a7a Pika \u5b9e\u4f8b\u7684 replicationid \u7684\u503c\u5e76\u6301\u4e45\u5316\u5230\u914d\u7f6e\u6587\u4ef6\u4e2d"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-bash",children:"> clearreplicationid\n> OK\n"})}),"\n",(0,s.jsx)(d.h3,{id:"disablewal",children:"DisableWal"}),"\n",(0,s.jsx)(d.p,{children:"\u6211\u4eec\u53ef\u4ee5\u6839\u636e disablewal (true/false) \u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\u6765\u51b3\u5b9a WAL \u9009\u9879\u7684\u5f00\u5173\uff0ctrue \u8868\u793a\u5199 WAL \u529f\u80fd\u5173\u95ed\uff0cfalse \u8868\u793a\u5199 WAL \u529f\u80fd\u5f00\u542f\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u5199 WAL \u9ed8\u8ba4\u662f\u5f00\u542f\u7684"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-bash",children:"> disablewal true  // \u5199 WAL \u5173\u95ed\n> OK\n> disablewal false  // \u5199 WAL \u5f00\u542f\n> OK\n> disablewal asdfs // \u8bc6\u522b\u5230\u5f02\u5e38\u53c2\u6570\n> (error) ERR Invalid parameter\n> disable false dasfasd // \u53c2\u6570\u6570\u76ee\u5f02\u5e38\n> (error) ERR wrong number of arguments for 'disablewal' command\n"})})]})}function x(e={}){const{wrapper:d}={...(0,t.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,d,i)=>{i.d(d,{R:()=>r,x:()=>n});var s=i(6540);const t={},l=s.createContext(t);function r(e){const d=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function n(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:d},e.children)}}}]);