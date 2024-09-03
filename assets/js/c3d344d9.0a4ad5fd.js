"use strict";(self.webpackChunkPikiwiDB_Pika_=self.webpackChunkPikiwiDB_Pika_||[]).push([[7043],{4630:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>_,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=r(4848),i=r(8453);const s={title:"NoSQL \u539f\u7406\u6982\u8ff0",sidebar_position:13},a=void 0,o={id:"\u8bbe\u8ba1\u4e0e\u5b9e\u73b0/NoSQL \u539f\u7406\u6982\u8ff0/index",title:"NoSQL \u539f\u7406\u6982\u8ff0",description:"pika \u8bbe\u8ba1",source:"@site/docs/\u8bbe\u8ba1\u4e0e\u5b9e\u73b0/NoSQL \u539f\u7406\u6982\u8ff0/index.md",sourceDirName:"\u8bbe\u8ba1\u4e0e\u5b9e\u73b0/NoSQL \u539f\u7406\u6982\u8ff0",slug:"/\u8bbe\u8ba1\u4e0e\u5b9e\u73b0/NoSQL \u539f\u7406\u6982\u8ff0/",permalink:"/docs/\u8bbe\u8ba1\u4e0e\u5b9e\u73b0/NoSQL \u539f\u7406\u6982\u8ff0/",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenAtomFoundation/PikiwiDB-Pika--Website/tree/main/docs/\u8bbe\u8ba1\u4e0e\u5b9e\u73b0/NoSQL \u539f\u7406\u6982\u8ff0/index.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"NoSQL \u539f\u7406\u6982\u8ff0",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u7167\u5f0f\u5907\u4efd",permalink:"/docs/\u8bbe\u8ba1\u4e0e\u5b9e\u73b0/\u5feb\u7167\u5f0f\u5907\u4efd/"},next:{title:"\u65e7\u5b58\u50a8\u7ed3\u6784",permalink:"/docs/\u8bbe\u8ba1\u4e0e\u5b9e\u73b0/\u65e7\u5b58\u50a8\u7ed3\u6784/"}},_={},d=[{value:"pika \u8bbe\u8ba1",id:"pika-\u8bbe\u8ba1",level:2},{value:"pika \u542f\u52a8\u6d41\u7a0b",id:"pika-\u542f\u52a8\u6d41\u7a0b",level:2},{value:"PikaServer \u529f\u80fd",id:"pikaserver-\u529f\u80fd",level:2},{value:"PikaDispatchThread",id:"pikadispatchthread",level:2},{value:"PikaClientProcessor",id:"pikaclientprocessor",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function c(n){const e={br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"pika-\u8bbe\u8ba1",children:"pika \u8bbe\u8ba1"}),"\n",(0,t.jsx)(e.p,{children:"pika \u5728\u8bbe\u8ba1\u7684\u65f6\u5019\u652f\u6301\u4e86\u4e24\u79cd\u8fd0\u884c\u6a21\u5f0f\uff0c\u5373\u7ecf\u5178\u6a21\u5f0f\u548c\u5206\u5e03\u5f0f\u6a21\u5f0f\u3002"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u6a21\u5f0f"}),(0,t.jsx)(e.th,{children:"\u539f\u7406"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u7ecf\u5178\u6a21\u5f0f"}),(0,t.jsx)(e.td,{children:"\u5373\u4e00\u4e3b\u591a\u4ece\u6a21\u5f0f\uff0c\u5b89\u88c5 pika \u5b9e\u4f8b\u7ef4\u5ea6\uff0c\u5373 1 \u4e2a pika \u5b9e\u4f8b\u7684\u6570\u636e\u53ef\u4ee5\u88ab\u591a\u4e2a\u4ece\u5b9e\u4f8b\u6570\u636e\u540c\u6b65\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u5206\u5e03\u5f0f\u6a21\u5f0f"}),(0,t.jsx)(e.td,{children:"\u5373\u7528\u6237\u7684\u6570\u636e\u96c6\u5408\u79f0\u4e3a table\uff0c\u5c06 table \u5207\u5206\u6210\u591a\u4e2a\u5206\u7247\uff0c\u6bcf\u4e2a\u5206\u7247\u79f0\u4e3a slot\uff0c\u5bf9\u4e8e\u67d0\u4e2a key \u7684\u6570\u636e\u662f\u7531\u54c8\u5e0c\u7b97\u6cd5\u8ba1\u7b97\u6765\u51b3\u5b9a\u5c5e\u4e8e\u54ea\u4e2a slot\uff0c\u5c06\u6240\u6709 slots \u53ca\u5176\u526f\u672c\u6309\u7167\u4e00\u5b9a\u7b56\u7565\u5206\u6563\u5230\u6240\u6709\u7684 pika \u5b9e\u4f8b\u4e2d\uff0c\u6bcf\u4e2a pika \u5b9e\u4f8b\u6709\u4e00\u90e8\u5206\u7684\u4e3b slot \u548c\u4e00\u90e8\u5206\u4ece slot\uff0c\u4e3b\u4ece\u7684\u7ef4\u5ea6\u4e3a slot\u3002"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"\u5b98\u7f51\u539f\u7406\u56fe\u5982\u4e0b"}),"\n",(0,t.jsxs)(e.p,{children:["\u7ecf\u5178\u6a21\u5f0f\n",(0,t.jsx)(e.img,{alt:"alt text",src:r(9072).A+"",width:"2404",height:"1232"})]}),"\n",(0,t.jsxs)(e.p,{children:["\u5206\u5e03\u5f0f\u6a21\u5f0f",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.img,{alt:"alt text",src:r(478).A+"",width:"2408",height:"1946"})]}),"\n",(0,t.jsx)(e.p,{children:"\u4ece\u539f\u7406\u56fe\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u6e05\u6670\u7684\u770b\u51fa\u7ecf\u5178\u6a21\u5f0f\u4ee5\u5b9e\u4f8b\u4e3a\u7ef4\u5ea6\uff0c\u5206\u5e03\u5f0f\u6a21\u5f0f\u4ee5 slot \u4e3a\u7ef4\u5ea6\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"pika-\u542f\u52a8\u6d41\u7a0b",children:"pika \u542f\u52a8\u6d41\u7a0b"}),"\n",(0,t.jsx)(e.p,{children:"\u57fa\u4e8e pika-3.4.0 \u7248\u672c\u7684\u4ee3\u7801\u7ed3\u6784\uff0c\u5176\u4e2d pika \u5f15\u7528\u4e86\u56db\u4e2a\u7b2c\u4e09\u65b9\u7684\u5e93\uff0c\u5206\u522b\u5982\u4e0b\uff1a"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Blackwidow\uff0c\u7531 piak \u81ea\u884c\u7ef4\u62a4\u7684\u57fa\u4e8e rocksdb \u7684\u5b58\u50a8\u7ba1\u7406\uff0c\u6240\u6709 pika \u7684\u6570\u636e\u64cd\u4f5c\u90fd\u4f1a\u901a\u8fc7 blackwidow \u7684\u5c01\u88c5\u6700\u7ec8\u843d\u5165 rocksdb\u3002"}),"\n",(0,t.jsx)(e.li,{children:"Glog\uff0c\u65e5\u5fd7\u5e93\uff0c\u7528\u4e8e pika \u9879\u76ee\u8f93\u5165\u4e0d\u540c\u7b49\u7ea7\u7684\u65e5\u5fd7\u3002"}),"\n",(0,t.jsx)(e.li,{children:"Pink\uff0c\u7531 pika \u81ea\u884c\u7ef4\u62a4\u7684\u4e8b\u4ef6\u9a71\u52a8\u6846\u67b6\uff0c\u5c01\u88c5\u4e86 redis \u534f\u8bae\u7684\u89e3\u6790\u5206\u53d1\u529f\u80fd\uff0c\u5e76\u63d0\u4f9b\u56de\u8c03\u51fd\u6570\u8fdb\u884c\u5904\u7406\u3002"}),"\n",(0,t.jsx)(e.li,{children:"Slash\uff0c\u4e00\u4e9b\u5904\u7406\u5de5\u5177\u51fd\u6570\uff0c\u4f8b\u5982\u540c\u6b65\u7684\u6216\u8005\u6570\u636e\u7c7b\u578b\u7684\u5de5\u5177\u51fd\u6570\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u542f\u52a8\u6d41\u7a0b\u4e2d\u6700\u4e3b\u8981\u7684\u51e0\u4e2a\u51fd\u6570\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c++",children:'int main(int argc, char *argv[]) {\n  ...\n  LOG(INFO) << "Server at: " << path;\n  g_pika_cmd_table_manager = new PikaCmdTableManager();\n  g_pika_server = new PikaServer();\n  g_pika_rm = new PikaReplicaManager();\n  g_pika_proxy = new PikaProxy();\n\n  if (g_pika_conf->daemonize()) {\n    close_std();\n  }\n\n  g_pika_proxy->Start();\n  g_pika_rm->Start();\n  g_pika_server->Start();\n  ...\n}\n\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u5206\u4e3a\u56db\u6b65\uff0c\u5373\u9996\u5148\u521d\u59cb\u5316 cmd \u7684\u547d\u4ee4\uff0c\u7136\u540e\u521d\u59cb\u5316 PikaServer\uff0c\u63a5\u7740\u521d\u59cb\u5316 PikaReplicaManager\uff0c\u6700\u540e\u521d\u59cb\u5316 PikaProxy\uff0c\u4e3b\u8981\u7684\u542f\u52a8\u51fd\u6570\u5c31\u662f\u5982\u4e0a\u51e0\u6b65\uff0c\u63a5\u7740\u5c31\u7ee7\u7eed\u5206\u6790\u4e00\u4e0b\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"pikaserver-\u529f\u80fd",children:"PikaServer \u529f\u80fd"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c++",children:'PikaServer::PikaServer() :\n  exit_(false),\n  slot_state_(INFREE),\n  have_scheduled_crontask_(false),\n  last_check_compact_time_({0, 0}),\n  master_ip_(""),\n  master_port_(0),\n  repl_state_(PIKA_REPL_NO_CONNECT),\n  role_(PIKA_ROLE_SINGLE),\n  last_meta_sync_timestamp_(0),\n  first_meta_sync_(false),\n  loop_partition_state_machine_(false),\n  force_full_sync_(false),\n  slowlog_entry_id_(0) {\n\n  //Init server ip host\n  if (!ServerInit()) {   // \u521d\u59cb\u5316\u76d1\u542c\u7684\u7aef\u53e3\u548cIP\n    LOG(FATAL) << "ServerInit iotcl error";\n  }\n\n  ...\n  InitBlackwidowOptions();   // \u521d\u59cb\u5316Blackwidow\u7684\u53c2\u6570\u9879\uff0c\u4e3b\u8981\u914d\u7f6erocksdb\u7684\u76f8\u5173\u53c2\u6570\n\t...\n\n  // Create thread   \u6839\u636e\u914d\u7f6e\u6765\u67e5\u770b\u6709\u591a\u5c11\u7684\u5de5\u4f5c\u7ebf\u7a0b\u6570\n  worker_num_ = std::min(g_pika_conf->thread_num(),\n                         PIKA_MAX_WORKER_THREAD_NUM);\n\n  std::set<std::string> ips;\n  if (g_pika_conf->network_interface().empty()) {\n    ips.insert("0.0.0.0");\n  } else {\n    ips.insert("127.0.0.1");\n    ips.insert(host_);\n  }\n  // We estimate the queue size    \u83b7\u53d6\u5904\u7406\u7684\u961f\u5217\u7684\u5927\u5c0f\n  int worker_queue_limit = g_pika_conf->maxclients() / worker_num_ + 100;\n  LOG(INFO) << "Worker queue limit is " << worker_queue_limit;\n  pika_dispatch_thread_ = new PikaDispatchThread(ips, port_, worker_num_, 3000,\n                                                 worker_queue_limit, g_pika_conf->max_conn_rbuf_size());     // \u8bbe\u7f6e\u5904\u7406\u54cd\u5e94\u8bf7\u6c42\u7684\u7ebf\u7a0b\u6c60\n  pika_monitor_thread_ = new PikaMonitorThread();   // \u76d1\u63a7\u7684\u7ebf\u7a0b\u6c60\n  pika_rsync_service_ = new PikaRsyncService(g_pika_conf->db_sync_path(),\n                                             g_pika_conf->port() + kPortShiftRSync);  // \u540c\u6b65\u7684\u7ebf\u7a0b\u6c60\n  pika_pubsub_thread_ = new pink::PubSubThread();   // \u8ba2\u9605\u53d1\u5e03\u5904\u7406\u7ebf\u7a0b\n  pika_auxiliary_thread_ = new PikaAuxiliaryThread();   // \u5fc3\u8df3\u8f85\u52a9\u7684\u72b6\u6001\u6539\u53d8\u5904\u7406\u7ebf\u7a0b\n\n  pika_client_processor_ = new PikaClientProcessor(g_pika_conf->thread_pool_size(), 100000);   //  \u5904\u7406\u5f02\u6b65\u7684task\n\n  pthread_rwlock_init(&state_protector_, NULL);\n  pthread_rwlock_init(&slowlog_protector_, NULL);\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u5176\u4e2d\u521d\u59cb\u5316\u4e86\u5927\u91cf\u7684\u5de5\u4f5c\u7ebf\u7a0b\uff0c\u6765\u542f\u52a8\u534f\u540c\u5904\u7406\u5206\u522b\u542f\u52a8\u4e86 6 \u4e2a\u4e0d\u540c\u7684\u7ebf\u7a0b\u6c60\u6216\u8005\u7ebf\u7a0b\u6765\u8fdb\u884c\u4e0d\u540c\u7684\u5904\u7406\u5de5\u4f5c\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"pikadispatchthread",children:"PikaDispatchThread"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c++",children:'PikaDispatchThread::PikaDispatchThread(std::set<std::string> &ips, int port, int work_num,\n                                       int cron_interval, int queue_limit, int max_conn_rbuf_size)\n    : conn_factory_(max_conn_rbuf_size),\n      handles_(this) {\n  thread_rep_ = pink::NewDispatchThread(ips, port, work_num, &conn_factory_,\n                                        cron_interval, queue_limit, &handles_);\n  thread_rep_->set_thread_name("Dispatcher");\n}\n\n...\nprivate:\n  class ClientConnFactory : public pink::ConnFactory {\n   public:\n     explicit ClientConnFactory(int max_conn_rbuf_size)\n         : max_conn_rbuf_size_(max_conn_rbuf_size) {\n     }\n     virtual std::shared_ptr<pink::PinkConn> NewPinkConn(\n        int connfd,\n        const std::string &ip_port,\n        pink::Thread* server_thread,\n        void* worker_specific_data,\n        pink::PinkEpoll* pink_epoll) const {\n       return std::static_pointer_cast<pink::PinkConn>\n         (std::make_shared<PikaClientConn>(connfd, ip_port, server_thread, pink_epoll, pink::HandleType::kAsynchronous, max_conn_rbuf_size_));\n     }\n   private:\n     int max_conn_rbuf_size_;\n    ...\n\n\t...\n  extern ServerThread *NewDispatchThread(\n    const std::set<std::string>& ips, int port,\n    int work_num, ConnFactory* conn_factory,\n    int cron_interval, int queue_limit,\n    const ServerHandle* handle) {\n  return new DispatchThread(ips, port, work_num, conn_factory,\n                            cron_interval, queue_limit, handle);\n  ...\n\n  ...\n  DispatchThread::DispatchThread(const std::set<std::string>& ips, int port,\n                               int work_num, ConnFactory* conn_factory,\n                               int cron_interval, int queue_limit,\n                               const ServerHandle* handle)\n      : ServerThread::ServerThread(ips, port, cron_interval, handle),\n        last_thread_(0),\n        work_num_(work_num),\n        queue_limit_(queue_limit) {\n  worker_thread_ = new WorkerThread*[work_num_];\n  for (int i = 0; i < work_num_; i++) {\n    worker_thread_[i] = new WorkerThread(conn_factory, this, queue_limit, cron_interval); // \u751f\u6210\u591a\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\uff0c\u5de5\u4f5c\u7ebf\u7a0b\u8fdb\u6765\u7684\u8bf7\u6c42\u901a\u8fc7conn_factory\u6765\u8fdb\u884c\u5904\u7406\n  }\n}\n\nDispatchThread::~DispatchThread() {\n  for (int i = 0; i < work_num_; i++) {\n    delete worker_thread_[i];\n  }\n  delete[] worker_thread_;\n}\n\nint DispatchThread::StartThread() {\n  for (int i = 0; i < work_num_; i++) { // \u6839\u636e\u8bbe\u7f6e\u7684\u5de5\u4f5c\u7ebf\u7a0b\u7684\u6570\u91cf\u6765\u8fdb\u884c\u5904\u7406\n    int ret = handle_->CreateWorkerSpecificData(\n        &(worker_thread_[i]->private_data_));\n    if (ret != 0) {\n      return ret;\n    }\n\n    if (!thread_name().empty()) {\n      worker_thread_[i]->set_thread_name("WorkerThread");\n    }\n    ret = worker_thread_[i]->StartThread();  // \u5f00\u542f\u6bcf\u4e00\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\n    if (ret != 0) {\n      return ret;\n    }\n  }\n  return ServerThread::StartThread();\n}\n...\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6b64\u65f6\u4f1a\u4f7f\u7528 PikaDispatchThread \u7684\u5de5\u5382\u65b9\u6cd5\u6765\u5904\u7406\u65b0\u63a5\u5165\u7684\u8fde\u63a5\uff0c\u5e76\u4e14\u6bcf\u4e00\u4e2a\u65b0\u8fdb\u6765\u7684\u8bf7\u6c42\u901a\u8fc7 NewPinkConn \u6765\u8fdb\u884c\u521d\u59cb\u5316\uff0c\u5e76\u63a5\u5165\u5904\u7406\u3002\u5176\u4e2d DispatchThread \u5c31\u662f\u4f4d\u4e8e pink \u7684\u5e93\u4e2d\u5b9e\u73b0\u7684\u65b9\u6cd5\u5176\u4e2d ServerThread \u673a\u4f1a\u5728\u521d\u59cb\u5316\u7684\u8fc7\u7a0b\u4e2d\u8fdb\u884c\u7aef\u53e3 IP \u7684\u76d1\u542c\uff0c\u5728\u4e8b\u4ef6\u54cd\u5e94\u4e4b\u540e\u5c31\u4f1a\u8c03\u7528 HandleNewConn \u65b9\u6cd5\u6765\u5904\u7406\u65b0\u52a0\u5165\u7684\u8fde\u63a5\u4fe1\u606f\uff0c\u4f1a\u5728\u5904\u7406\u7684\u8fc7\u7a0b\u4e2d\u8fdb\u884c\u4e00\u4e2a\u8f6e\u8bad\u7684\u64cd\u4f5c\u6765\u5206\u914d\u5230\u5de5\u4f5c\u7ebf\u7a0b\uff0c\u5728\u52a0\u5165\u4e8b\u4ef6\u4e4b\u540e\u5c31\u4f1a\u901a\u8fc7\u65b0\u751f\u6210\u4e00\u4e2a PikaClientConn \u6765\u8fdb\u884c\u4e8b\u4ef6\u5904\u7406\uff0c\u5f53 pink \u4e2d\u7684 redisconn \u89e3\u6790\u5230\u4e86\u5b8c\u6574\u7684\u547d\u4ee4\u7684\u65f6\u5019\u5c31\u4f1a\u8c03\u7528 PikaClientConn \u7684 ProcessRedisCmds \u65b9\u6cd5\u6765\u5904\u7406\uff08\u4e2d\u95f4\u7684\u903b\u8f91\u6709\u70b9\u590d\u6742\u5927\u5bb6\u6709\u5174\u8da3\u53ef\u4ee5\u81ea\u884c\u67e5\u627e\u6e90\u7801\u9605\u8bfb\u4e00\u4e0b\uff09\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c++",children:'void PikaClientConn::ProcessRedisCmds(const std::vector<pink::RedisCmdArgsType>& argvs, bool async, std::string* response) {\n  if (async) {   // \u662f\u5426\u662f\u540e\u53f0\u4efb\u52a1\n    BgTaskArg* arg = new BgTaskArg();  // \u65b0\u5efa\u4e00\u4e2a\u540e\u53f0\u4efb\u52a1\n    arg->redis_cmds = argvs;\n    arg->conn_ptr = std::dynamic_pointer_cast<PikaClientConn>(shared_from_this());\n    g_pika_server->ScheduleClientPool(&DoBackgroundTask, arg);  // \u653e\u5165PikaClientProcessor\u7684\u7ebf\u7a0b\u6c60\u6765\u8fdb\u884c\u5904\u7406\n    return;\n  }\n  BatchExecRedisCmd(argvs);  // \u5982\u679c\u4e0d\u662f\u5219\u8c03\u7528\u54cd\u5e94\u7684\u7ebf\u7a0b\u6c60\u76f4\u63a5\u5904\u7406\n}\n\n...\nvoid PikaClientConn::BatchExecRedisCmd(const std::vector<pink::RedisCmdArgsType>& argvs) {\n  resp_num.store(argvs.size());\n  for (size_t i = 0; i < argvs.size(); ++i) {  // \u6839\u636e\u89e3\u6790\u7684\u8f93\u5165\u53c2\u6570\u5927\u5c0f\u6765\u5904\u7406\n    std::shared_ptr<std::string> resp_ptr = std::make_shared<std::string>();\n    resp_array.push_back(resp_ptr);\n    ExecRedisCmd(argvs[i], resp_ptr);   // \u5904\u7406\u5bf9\u5e94\u7684\u547d\u4ee4\n  }\n  TryWriteResp();\n}\n...\nvoid PikaClientConn::ExecRedisCmd(const PikaCmdArgsType& argv, std::shared_ptr<std::string> resp_ptr) {\n  // get opt\n  std::string opt = argv[0];\n  slash::StringToLower(opt);\n  if (opt == kClusterPrefix) {   // \u68c0\u67e5\u662f\u5426\u662f\u96c6\u7fa4\u540d\u79f0\u5f00\u5934\n    if (argv.size() >= 2 ) {\n      opt += argv[1];\n      slash::StringToLower(opt);\n    }\n  }\n\n  std::shared_ptr<Cmd> cmd_ptr = DoCmd(argv, opt, resp_ptr);  // \u6267\u884c\u547d\u4ee4\n  // level == 0 or (cmd error) or (is_read)\n  if (g_pika_conf->consensus_level() == 0 || !cmd_ptr->res().ok() || !cmd_ptr->is_write()) {\n    *resp_ptr = std::move(cmd_ptr->res().message());\n    resp_num--;\n  }\n}\n...\n\nstd::shared_ptr<Cmd> PikaClientConn::DoCmd(\n    const PikaCmdArgsType& argv,\n    const std::string& opt,\n    std::shared_ptr<std::string> resp_ptr) {\n  // Get command info\n  std::shared_ptr<Cmd> c_ptr = g_pika_cmd_table_manager->GetCmd(opt);   // \u4ece\u547d\u4ee4\u5217\u8868\u4e2d\u67e5\u627e\u547d\u4ee4\n  if (!c_ptr) {\n    std::shared_ptr<Cmd> tmp_ptr = std::make_shared<DummyCmd>(DummyCmd());\n    tmp_ptr->res().SetRes(CmdRes::kErrOther,\n        "unknown or unsupported command \\\'" + opt + "\\"");\n    return tmp_ptr;\n  }\n  c_ptr->SetConn(std::dynamic_pointer_cast<PikaClientConn>(shared_from_this()));\n  c_ptr->SetResp(resp_ptr);\n\n  // Check authed\n  // AuthCmd will set stat_\n  if (!auth_stat_.IsAuthed(c_ptr)) {   // \u68c0\u67e5\u662f\u5426\u8ba4\u8bc1\n    c_ptr->res().SetRes(CmdRes::kErrOther, "NOAUTH Authentication required.");\n    return c_ptr;\n  }\n\n  uint64_t start_us = 0;\n  if (g_pika_conf->slowlog_slower_than() >= 0) {\n    start_us = slash::NowMicros();\n  }\n\n  bool is_monitoring = g_pika_server->HasMonitorClients();  // \u662f\u5426\u662f\u76d1\u63a7\u7684\u5ba2\u6237\u7aef\n  if (is_monitoring) {\n    ProcessMonitor(argv);\n  }\n\n  // Initial\n  c_ptr->Initial(argv, current_table_);  // \u521d\u59cb\u5316\u547d\u4ee4\u4fe1\u606f\n  if (!c_ptr->res().ok()) {\n    return c_ptr;\n  }\n\n  g_pika_server->UpdateQueryNumAndExecCountTable(current_table_, opt, c_ptr->is_write());\n\n  // PubSub connection\n  // (P)SubscribeCmd will set is_pubsub_\n  if (this->IsPubSub()) {\n    if (opt != kCmdNameSubscribe &&\n        opt != kCmdNameUnSubscribe &&\n        opt != kCmdNamePing &&\n        opt != kCmdNamePSubscribe &&\n        opt != kCmdNamePUnSubscribe) {\n      c_ptr->res().SetRes(CmdRes::kErrOther,\n          "only (P)SUBSCRIBE / (P)UNSUBSCRIBE / PING / QUIT allowed in this context");\n      return c_ptr;\n    }\n  }\n\n  if (g_pika_conf->consensus_level() != 0 && c_ptr->is_write()) {\n    c_ptr->SetStage(Cmd::kBinlogStage);\n  }\n  if (!g_pika_server->IsCommandSupport(opt)) {\n    c_ptr->res().SetRes(CmdRes::kErrOther,\n        "This command is not supported in current configuration");\n    return c_ptr;\n  }\n\n  if (!g_pika_server->IsTableExist(current_table_)) {\n    c_ptr->res().SetRes(CmdRes::kErrOther, "Table not found");\n    return c_ptr;\n  }\n\n  // TODO: Consider special commands, like flushall, flushdb?\n  if (c_ptr->is_write()) {\n    if (g_pika_server->IsTableBinlogIoError(current_table_)) {\n      c_ptr->res().SetRes(CmdRes::kErrOther, "Writing binlog failed, maybe no space left on device");\n      return c_ptr;\n    }\n    std::vector<std::string> cur_key = c_ptr->current_key();\n    if (cur_key.empty()) {\n      c_ptr->res().SetRes(CmdRes::kErrOther, "Internal ERROR");\n      return c_ptr;\n    }\n    if (g_pika_server->readonly(current_table_, cur_key.front())) {\n      c_ptr->res().SetRes(CmdRes::kErrOther, "Server in read-only");\n      return c_ptr;\n    }\n    if (!g_pika_server->ConsensusCheck(current_table_, cur_key.front())) {\n      c_ptr->res().SetRes(CmdRes::kErrOther, "Consensus level not match");\n    }\n  }\n\n  // Process Command   \u6267\u884c\u547d\u4ee4\n  c_ptr->Execute();\n\n  if (g_pika_conf->slowlog_slower_than() >= 0) {\n    ProcessSlowlog(argv, start_us);\n  }\n  if (g_pika_conf->consensus_level() != 0 && c_ptr->is_write()) {\n    c_ptr->SetStage(Cmd::kExecuteStage);\n  }\n\n  return c_ptr;\n}\n...\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u901a\u8fc7\u5c42\u5c42\u7684\u8c03\u7528\u5173\u7cfb\u6700\u7ec8\u8c03\u7528\u5230\u4e86 Cmd \u7c7b\u7684 Do \u65b9\u6cd5\uff0c\u4f8b\u5982 SetCmd \u7684\u6267\u884c\u6d41\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c++",children:"void SetCmd::Do(std::shared_ptr<Partition> partition) {\n  rocksdb::Status s;\n  int32_t res = 1;\n  switch (condition_) {\n    case SetCmd::kXX:\n      s = partition->db()->Setxx(key_, value_, &res, sec_);  // \u901a\u8fc7db\u6765\u8bbe\u7f6ekey\u76f8\u5173\u7684\u4fe1\u606f\n      break;\n    case SetCmd::kNX:\n      s = partition->db()->Setnx(key_, value_, &res, sec_);\n      break;\n    case SetCmd::kVX:\n      s = partition->db()->Setvx(key_, target_, value_, &success_, sec_);\n      break;\n    case SetCmd::kEXORPX:\n      s = partition->db()->Setex(key_, value_, sec_);\n      break;\n    default:\n      s = partition->db()->Set(key_, value_);\n      break;\n  }\n\n  if (s.ok() || s.IsNotFound()) {\n    if (condition_ == SetCmd::kVX) {\n      res_.AppendInteger(success_);\n    } else {\n      if (res == 1) {\n        res_.SetRes(CmdRes::kOk);\n      } else {\n        res_.AppendArrayLen(-1);;\n      }\n    }\n  } else {\n    res_.SetRes(CmdRes::kErrOther, s.ToString());\n  }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u81f3\u6b64\u5c31\u662f\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u7684 set \u547d\u4ee4\u6765\u8fdb\u884c\u7684\u6d41\u7a0b\uff0c\u5f53\u7136\u4e2d\u95f4\u7701\u7565\u4e86\u5f88\u591a\u590d\u6742\u7684\u4ea4\u4e92\u7ec6\u8282\uff0c\u5e76\u4e14\u8df3\u8fc7\u4e86 pink \u5e93\u7684\u4e00\u4e2a\u5904\u7406\u6d41\u7a0b\uff0c\u6700\u7ec8\u4f1a\u56de\u8c03\u5728 pika \u4e2d\u7684 ProcessRedisCmds \u5904\u7406\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"pikaclientprocessor",children:"PikaClientProcessor"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c++",children:'PikaClientProcessor::PikaClientProcessor(\n    size_t worker_num, size_t max_queue_size, const std::string& name_prefix) {\n  pool_ = new pink::ThreadPool(\n      worker_num, max_queue_size, name_prefix + "Pool");   // \u751f\u6210\u4e00\u4e2a\u7ebf\u7a0b\u6c60\n  for (size_t i = 0; i < worker_num; ++i) {   \t\t\t// \u6839\u636e\u8bbe\u7f6e\u7684\u7ebf\u7a0b\u6c60\u6570\u91cf\u6765\u521d\u59cb\u5316\n    pink::BGThread* bg_thread = new pink::BGThread(max_queue_size);  // \u521d\u59cb\u5316bg\u5de5\u4f5c\u7ebf\u7a0b\n    bg_threads_.push_back(bg_thread);         \t// \u4fdd\u5b58\u6bcf\u4e2a\u7ebf\u7a0b\n    bg_thread->set_thread_name(name_prefix + "BgThread");\n  }\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u4e3b\u8981\u662f\u751f\u6210\u7ebf\u7a0b\u6c60\u6765\u8fdb\u884c\u540e\u53f0\u8fd0\u884c\u3002\u5728\u4e0a\u4e00\u8282\u4e2d\u5206\u6790\u7684 task \u5c31\u662f\u4ea4\u7ed9\u4e86 pool_\u7ebf\u7a0b\u6c60\u6765\u8fdb\u884c\u6570\u636e\u7684\u5904\u7406\u3002\u4e00\u4e9b\u534f\u8c03\u6570\u636e\u540c\u6b65\u7684\u5de5\u4f5c\u5c31\u4ea4\u7ed9\u4e86 bg_threads \u7ebf\u7a0b\u6c60\u5904\u7406\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"alt text",src:r(8309).A+"",width:"1830",height:"1102"})}),"\n",(0,t.jsx)(e.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,t.jsx)(e.p,{children:"\u672c\u6587\u4e3b\u8981\u7b80\u5355\u7684\u63cf\u8ff0\u4e86\u6709\u5173 piak \u7684\u603b\u4f53\u8bbe\u8ba1\u6846\u67b6\uff08\u53c2\u8003\u5b98\u7f51\u67b6\u6784\uff09\uff0c\u7b80\u5355\u7684\u901a\u8fc7 PikaServer \u7684\u542f\u52a8\u8fc7\u7a0b\u6765\u63cf\u8ff0\u4e86\u4e00\u4e0b\u57fa\u7840\u7684\u5904\u7406\u903b\u8f91\uff0c\u56e0\u4e3a\u8fd9\u5176\u4e2d\u6d89\u53ca\u5230\u5927\u91cf\u7684\u7ec6\u8282\u6545\u5e76\u6ca1\u6709\u8be6\u5c3d\u7684\u53bb\u5206\u6790\uff0c\u5e76\u4e14\u4e5f\u6ca1\u6709\u6d89\u53ca\u5230\u5176\u4ed6\u7684\u529f\u80fd\u6bd4\u5982 slot \u7684\u6570\u636e\u4e00\u81f4\u6027\u4fdd\u8bc1\u7b49\u7b49\u7ec6\u8282\uff0c\u540e\u7eed\u6709\u7ee7\u7eed\u518d\u7ee7\u7eed\u67e5\u9605\u76f8\u5173\u5185\u5bb9\u3002\u7531\u4e8e\u672c\u4eba\u624d\u758f\u5b66\u6d45\uff0c\u5982\u6709\u9519\u8bef\u8bf7\u6279\u8bc4\u6307\u6b63\u3002"})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},478:(n,e,r)=>{r.d(e,{A:()=>t});const t=r.p+"assets/images/image-1-50d7e9a7e987a96739e213f2cc79e3a4.png"},8309:(n,e,r)=>{r.d(e,{A:()=>t});const t=r.p+"assets/images/image-2-7170d56872bf3b1b9f58c4a5d54b6a38.png"},9072:(n,e,r)=>{r.d(e,{A:()=>t});const t=r.p+"assets/images/image-390cbcfad0906bae06cd24d4463c1a36.png"},8453:(n,e,r)=>{r.d(e,{R:()=>a,x:()=>o});var t=r(6540);const i={},s=t.createContext(i);function a(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);