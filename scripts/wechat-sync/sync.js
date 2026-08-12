/**
 * 微信公众号文章实时同步小工具
 *
 * 功能：
 * 从数据源（本地 JSON 文件或远程 URL）获取最新的公众号文章列表，
 * 与现有 src/wechat/config.js 中的文章合并去重后，重写配置文件，
 * 并更新 WECHAT_LAST_SYNCED 时间戳。
 *
 * 用法：
 *   node scripts/wechat-sync/sync.js              # 使用默认配置（合并模式）
 *   node scripts/wechat-sync/sync.js --source <path-or-url>
 *   node scripts/wechat-sync/sync.js --replace    # 用数据源完全替换现有文章
 *   node scripts/wechat-sync/sync.js --dry-run    # 只打印结果不写文件
 *
 * 详见 scripts/wechat-sync/README.md
 */

const fs = require('fs');
const path = require('path');

// ---------- 配置 ----------
const ROOT = path.resolve(__dirname, '..', '..');
const CONFIG_PATH = path.join(ROOT, 'src', 'wechat', 'config.js');
const DEFAULT_SOURCE = path.join(__dirname, 'articles.json');

// ---------- 工具函数 ----------

/** 读取并解析命令行参数 */
function parseArgs(argv) {
  const args = {source: null, dryRun: false, replace: false};
  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--source' || arg === '-s') {
      args.source = argv[++i];
    } else if (arg === '--dry-run' || arg === '-d') {
      args.dryRun = true;
    } else if (arg === '--replace' || arg === '-r') {
      args.replace = true;
    } else if (arg === '--help' || arg === '-h') {
      args.help = true;
    }
  }
  return args;
}

/** 判断字符串是否为 URL */
function isUrl(str) {
  return /^https?:\/\//i.test(str);
}

/** 从本地文件读取文章数据 */
function readLocalSource(filePath) {
  const abs = path.isAbsolute(filePath)
    ? filePath
    : path.resolve(process.cwd(), filePath);
  if (!fs.existsSync(abs)) {
    throw new Error(`数据源文件不存在: ${abs}`);
  }
  const raw = fs.readFileSync(abs, 'utf-8');
  return JSON.parse(raw);
}

/** 从远程 URL 读取文章数据 */
async function readRemoteSource(url) {
  // Node 18+ 内置 fetch
  if (typeof fetch === 'undefined') {
    throw new Error(
      '当前 Node 版本不支持 fetch，请升级到 Node 18+ 或使用本地数据源'
    );
  }
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`远程数据源请求失败: HTTP ${res.status}`);
  }
  return res.json();
}

/** 从现有 config.js 中解析出已有文章数组 */
function parseExistingArticles(configContent) {
  const match = configContent.match(
    /export\s+const\s+WECHAT_ARTICLES\s*=\s*\[([\s\S]*?)\];/
  );
  if (!match) return [];

  // 使用 Function 构造器安全地求值数组字面量
  try {
    // eslint-disable-next-line no-new-func
    const fn = new Function(`return [${match[1]}];`);
    return fn();
  } catch (err) {
    console.warn('⚠️  解析现有文章失败，将以空列表开始合并:', err.message);
    return [];
  }
}

/** 规范化单篇文章字段 */
function normalizeArticle(item) {
  if (!item || typeof item !== 'object') return null;
  const url = String(item.url || '').trim();
  const title = String(item.title || '').trim();
  if (!url || !title) return null;

  // 生成 id：优先使用已有 id，否则从 url 末段生成
  let id = String(item.id || '').trim();
  if (!id) {
    id = url.split('/').pop().replace(/[^\w-]/g, '-') || `article-${Date.now()}`;
  }

  return {
    id,
    title,
    summary: String(item.summary || '').trim(),
    url,
    date: String(item.date || '').trim(),
    cover: String(item.cover || '/img/PikiwiDB-Logo.png').trim(),
  };
}

/** 合并文章：以 url 去重，新数据覆盖旧数据，按日期倒序排列 */
function mergeArticles(existing, incoming) {
  const map = new Map();
  for (const a of existing) {
    const n = normalizeArticle(a);
    if (n) map.set(n.url, n);
  }
  for (const a of incoming) {
    const n = normalizeArticle(a);
    if (n) map.set(n.url, n);
  }
  const list = Array.from(map.values());
  list.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return list;
}

/** 生成文章对象的代码片段（2 空格缩进） */
function articlesToCode(articles) {
  return articles
    .map((a) => {
      return `  {
    id: ${JSON.stringify(a.id)},
    title: ${JSON.stringify(a.title)},
    summary: ${JSON.stringify(a.summary)},
    url: ${JSON.stringify(a.url)},
    date: ${JSON.stringify(a.date)},
    cover: ${JSON.stringify(a.cover)},
  }`;
    })
    .join(',\n');
}

/** 生成完整的 config.js 文件内容 */
function buildConfigContent(articles, syncedTime) {
  const articlesCode = articlesToCode(articles);
  return `/**
 * 微信公众号博客文章配置
 * 数据来源：微信公众号「Pika开源社区」
 *
 * 说明：
 * 微信公众号没有公开的开放 API，无法直接通过接口获取文章列表。
 * 本配置文件用于维护公众号文章的元信息（标题、链接、摘要、发布日期）。
 *
 * 如何更新：
 * 推荐使用实时同步小工具自动更新本文件：
 *   npm run sync:wechat
 * 详见 scripts/wechat-sync/README.md
 *
 * 也可手动更新：
 * 1. 在微信公众号「Pika开源社区」发布新文章后
 * 2. 将文章信息添加到下方 WECHAT_ARTICLES 数组中
 * 3. 网站会自动展示最新的文章列表
 *
 * 文章链接获取方式：在微信公众号文章页面点击右上角"复制链接"即可获得
 */

export const WECHAT_ACCOUNT_NAME = 'Pika开源社区';

/**
 * 最近一次同步时间（由同步小工具自动写入，格式：YYYY-MM-DD HH:mm:ss）
 * 手动维护文章时可不填
 */
export const WECHAT_LAST_SYNCED = ${JSON.stringify(syncedTime)};

// 微信公众号文章列表（按发布时间倒序排列，最新的在最前面）
export const WECHAT_ARTICLES = [
${articlesCode},
];

/**
 * 微信公众号介绍页面链接
 * 可在微信公众平台获取公众号的永久链接
 */
export const WECHAT_ACCOUNT_URL =
  'https://mp.weixin.qq.com/s/CvIdQs3g31DC8JztyymuqQ';
`;
}

/** 格式化当前时间为 YYYY-MM（精确到月） */
function formatNow() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}`;
}

// ---------- 主流程 ----------

async function main() {
  const args = parseArgs(process.argv);
  if (args.help) {
    console.log(
      [
        '用法: node scripts/wechat-sync/sync.js [选项]',
        '',
        '选项:',
        '  --source,  -s <path|url>  指定数据源（本地 JSON 文件或远程 URL）',
        '  --replace, -r             用数据源完全替换现有文章（非合并）',
        '  --dry-run, -d             只打印结果，不写入文件',
        '  --help,    -h             显示帮助',
      ].join('\n')
    );
    return;
  }

  const source = args.source || DEFAULT_SOURCE;
  console.log(`🔄 数据源: ${source}`);

  // 1. 读取数据源
  let sourceData;
  if (isUrl(source)) {
    sourceData = await readRemoteSource(source);
  } else {
    sourceData = readLocalSource(source);
  }
  const incoming = Array.isArray(sourceData)
    ? sourceData
    : sourceData.articles || [];
  console.log(`📥 数据源文章数: ${incoming.length}`);

  // 2. 读取现有配置
  const existingContent = fs.readFileSync(CONFIG_PATH, 'utf-8');
  const existing = parseExistingArticles(existingContent);
  console.log(`📂 现有文章数: ${existing.length}`);

  // 3. 合并去重 或 完全替换
  let merged;
  if (args.replace) {
    console.log('🔁 替换模式：用数据源完全替换现有文章');
    merged = mergeArticles([], incoming);
  } else {
    merged = mergeArticles(existing, incoming);
  }
  console.log(`✅ 最终文章数: ${merged.length}`);

  // 4. 生成新配置
  const syncedTime = formatNow();
  const newContent = buildConfigContent(merged, syncedTime);

  if (args.dryRun) {
    console.log('\n--- dry-run 模式，不写入文件 ---');
    console.log(`最近同步时间: ${syncedTime}`);
    console.log('文章列表:');
    merged.forEach((a, i) =>
      console.log(`  ${i + 1}. [${a.date}] ${a.title} -> ${a.url}`)
    );
    return;
  }

  // 5. 写入文件
  fs.writeFileSync(CONFIG_PATH, newContent, 'utf-8');
  console.log(`\n🎉 同步完成！已更新 ${CONFIG_PATH}`);
  console.log(`最近同步时间: ${syncedTime}`);
}

main().catch((err) => {
  console.error('❌ 同步失败:', err.message);
  process.exit(1);
});
