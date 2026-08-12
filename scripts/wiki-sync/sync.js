#!/usr/bin/env node

/**
 * 生成 Wiki 目录兜底清单 static/wiki-pages.json。
 *
 * 网站默认在浏览器端实时拉取 GitHub Wiki 的 Home.md 解析目录（见
 * src/pages/wiki/index.js）。本工具用于在构建时预生成一份兜底清单，
 * 当用户浏览器无法访问 GitHub（网络受限等）时回退使用。
 *
 * 兜底清单只记录分类与链接（链接已规范化为完整 GitHub Wiki URL），
 * 不记录文章内容，也不注册站内路由。
 *
 * 用法：
 *   node scripts/wiki-sync/sync.js
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const {execFileSync} = require('child_process');

const WIKI_GIT_URL =
  process.env.WIKI_GIT_URL ||
  'https://github.com/OpenAtomFoundation/pikiwidb.wiki.git';
const WIKI_BASE_URL = 'https://github.com/OpenAtomFoundation/pikiwidb/wiki';
const OUTPUT_FILE = path.resolve(__dirname, '../../static/wiki-pages.json');

// ---------- 工具函数 ----------

function runGit(args, cwd) {
  return execFileSync('git', args, {
    cwd,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim();
}

function decodeUrlPart(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

/**
 * 将 Home.md 中的链接规范化为完整 GitHub Wiki URL。
 * 与前端 src/wiki/config.js 的 resolveWikiUrl 逻辑保持一致。
 */
function resolveWikiUrl(href) {
  if (!href) return href;
  if (/^https?:\/\//i.test(href)) return href;

  const relativeMatch = href
    .replace(/\/$/, '')
    .match(/^(?:\.\/|\/)?wiki\/(.+)$/i);
  if (relativeMatch) {
    const slug = decodeUrlPart(relativeMatch[1]);
    return `${WIKI_BASE_URL}/${encodeURIComponent(slug)}`;
  }
  return href;
}

/**
 * 解析 Home.md，按二级标题分类、列表项提取链接。
 * 与前端 src/wiki/config.js 的 parseHomeMarkdown 逻辑保持一致。
 */
function parseHome(home) {
  const categories = [];
  let currentCategory = null;

  for (const line of home.split(/\r?\n/)) {
    const heading = line.match(/^##\s+(.+?)\s*$/);
    if (heading) {
      currentCategory = {title: heading[1], items: []};
      categories.push(currentCategory);
      continue;
    }

    const item = line.match(/^\s*-\s+\[([^\]]+)\]\((.+)\)\s*$/);
    if (!item || !currentCategory) continue;

    const [, title, href] = item;
    currentCategory.items.push({
      title,
      href: resolveWikiUrl(href),
    });
  }

  return categories;
}

// ---------- 主流程 ----------

function main() {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'pikiwidb-wiki-'));
  const checkoutDir = path.join(tempRoot, 'wiki');

  try {
    console.log(`[wiki-sync] 正在获取 ${WIKI_GIT_URL}`);
    runGit(['clone', '--depth', '1', WIKI_GIT_URL, checkoutDir], tempRoot);

    const commit = runGit(['rev-parse', 'HEAD'], checkoutDir);
    const home = fs.readFileSync(path.join(checkoutDir, 'Home.md'), 'utf8');
    const categories = parseHome(home);

    const manifest = {
      source: WIKI_GIT_URL,
      commit,
      generatedAt: new Date().toISOString(),
      categories,
    };

    fs.mkdirSync(path.dirname(OUTPUT_FILE), {recursive: true});
    fs.writeFileSync(
      OUTPUT_FILE,
      `${JSON.stringify(manifest, null, 2)}\n`,
      'utf8'
    );
    console.log(
      `[wiki-sync] 已生成兜底清单：${categories.length} 个分类 -> ${OUTPUT_FILE}`
    );
  } finally {
    fs.rmSync(tempRoot, {recursive: true, force: true});
  }
}

try {
  main();
} catch (error) {
  console.error(`[wiki-sync] 同步失败：${error.message}`);
  if (fs.existsSync(OUTPUT_FILE)) {
    console.warn('[wiki-sync] 保留现有兜底清单，网站仍可继续构建。');
    process.exitCode = 0;
  } else {
    process.exitCode = 1;
  }
}
