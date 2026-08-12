# 微信公众号文章实时同步小工具

本小工具用于将微信公众号「Pika开源社区」的最新文章同步到网站博客页面（`/blog`）。

## 背景

微信公众号没有公开的开放 API，无法直接通过接口获取文章列表。本小工具通过以下方式获取文章：

1. **搜狗微信搜索抓取**：通过搜狗微信搜索（`weixin.sogou.com`）抓取「Pika开源社区」公众号的文章标题、摘要、发布日期。
2. **微信文章遍历**：从已知的微信文章链接开始，通过文章页面中的 `pre_article_link` / `next_article_link` 遍历获取相邻文章的真实 `mp.weixin.qq.com` 链接。
3. **合并数据源**：将两种方式获取的文章合并，有真实链接的使用真实链接，没有的使用搜狗搜索链接作为回退。

## 目录结构

```
scripts/wechat-sync/
├── sync.js              # 同步脚本（主程序）
├── articles.json        # 数据源（文章列表）
├── fetch-sogou-all.js   # 从搜狗微信搜索抓取文章列表
├── crawl-wx.js          # 遍历微信文章获取真实链接
├── merge-articles.js    # 合并搜狗与微信遍历结果
├── build-articles.js    # 将抓取结果转换为 articles.json（仅搜狗）
├── parse-sogou.js       # 解析搜狗搜索结果页（辅助）
├── resolve-links.js     # 尝试解析搜狗跳转链接（辅助）
├── search-bing.js       # Bing 搜索辅助（备用）
└── README.md            # 本文档
```

## 快速使用

### 完整同步流程（获取真实微信链接）

```bash
# 1. 从搜狗抓取文章列表（标题、摘要、日期）
node scripts/wechat-sync/fetch-sogou-all.js

# 2. 从微信文章遍历获取真实链接
node scripts/wechat-sync/crawl-wx.js

# 3. 合并两种来源的数据
node scripts/wechat-sync/merge-articles.js

# 4. 同步到配置文件
node scripts/wechat-sync/sync.js --replace
```

### 仅同步（使用现有 articles.json）

```bash
npm run sync:wechat
```

### 同步脚本选项

```bash
node scripts/wechat-sync/sync.js [选项]
```

| 选项 | 说明 |
| --- | --- |
| `--source, -s <path\|url>` | 指定数据源（本地 JSON 文件或远程 URL） |
| `--replace, -r` | 用数据源完全替换现有文章（非合并模式） |
| `--dry-run, -d` | 只打印结果，不写入文件 |
| `--help, -h` | 显示帮助 |

## 数据源格式

数据源为一个 JSON 文件，内容为文章数组：

```json
[
  {
    "id": "pikiwidb-4.0.0",
    "title": "What's new in PikiwiDB(Pika) v4.0.0",
    "summary": "文章摘要...",
    "url": "http://mp.weixin.qq.com/s?__biz=Mzg4MTY2ODA1MQ==&mid=...",
    "date": "2024-07-08",
    "cover": "/img/PikiwiDB-Logo.png"
  }
]
```

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `title` | 是 | 文章标题 |
| `url` | 是 | 文章链接（真实微信链接或搜狗搜索链接） |
| `id` | 否 | 文章唯一标识，缺省时从标题自动生成 |
| `summary` | 否 | 文章摘要 |
| `date` | 否 | 发布日期（YYYY-MM-DD），用于排序 |
| `cover` | 否 | 封面图路径，缺省使用 `/img/PikiwiDB-Logo.png` |

## 同步逻辑

- **合并模式（默认）**：以 `url` 为唯一键合并去重，新数据覆盖旧数据，按日期倒序排列。适合增量更新。
- **替换模式（`--replace`）**：用数据源完全替换现有文章。适合全量重新同步。

同步完成后会自动更新 `WECHAT_LAST_SYNCED` 时间戳，博客页面会展示该时间。

## 关于文章链接

由于微信公众号的反爬机制：

- **已获取真实链接的文章**：点击直接打开 `mp.weixin.qq.com` 微信原文
- **未获取真实链接的文章**：点击打开搜狗微信搜索页，在搜索结果中可找到并打开微信原文

如需补充更多真实链接，可手动在微信中复制文章链接，填入 [`articles.json`](./articles.json) 后重新同步。

## 环境要求

- Node.js >= 18（使用内置 `fetch`）

## 推荐工作流

1. 运行 `node scripts/wechat-sync/fetch-sogou-all.js` 抓取最新文章列表
2. 运行 `node scripts/wechat-sync/crawl-wx.js` 遍历微信文章获取真实链接
3. 运行 `node scripts/wechat-sync/merge-articles.js` 合并数据源
4. （可选）手动补充真实微信文章链接到 [`articles.json`](./articles.json)
5. 运行 `npm run sync:wechat -- --replace` 同步到配置文件
6. 提交 [`src/wechat/config.js`](../../src/wechat/config.js) 的变更
7. 站点重新构建/部署后，博客页面自动展示最新文章
