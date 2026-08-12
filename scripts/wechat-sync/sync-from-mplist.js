/**
 * 从 blog/mplist.txt 读取所有微信文章链接，
 * 逐个抓取文章的标题、摘要、发布日期，
 * 生成 articles.json 并同步到 src/wechat/config.js
 *
 * 处理链接中的空格：微信文章链接中可能包含空格（公众号故意处理），
 * 需要去除空格后才能正常访问。
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const MPLIST_PATH = path.join(ROOT, 'blog', 'mplist.txt');

/** 读取 mplist.txt，返回清理后的链接数组 */
function readMplist() {
  const raw = fs.readFileSync(MPLIST_PATH, 'utf-8');
  const lines = raw.split(/\r?\n/);
  const links = [];
  for (let line of lines) {
    // 去除首尾空白
    line = line.trim();
    if (!line) continue;
    // 去除链接内部的空格（公众号可能故意在链接中插入空格）
    line = line.replace(/\s+/g, '');
    if (line.startsWith('http')) {
      links.push(line);
    }
  }
  return links;
}

/** 抓取单篇微信文章，解析标题、摘要、日期 */
async function fetchArticle(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    },
    redirect: 'follow',
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
  const html = await res.text();
  return parseArticle(html, url);
}

function unescapeHtml(s) {
  return s
    .replace(/'/g, "'")
    .replace(/"/g, '"')
    .replace(/&/g, '&')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/&nbsp;/g, ' ');
}

function parseArticle(html, url) {
  let title = '';
  const titleM = html.match(/var\s+msg_title\s*=\s*['"]([^'"]+)['"]/);
  if (titleM) title = unescapeHtml(titleM[1]);
  if (!title) {
    const t2 = html.match(/<meta\s+property="og:title"\s+content="([^"]+)"/);
    if (t2) title = unescapeHtml(t2[1]);
  }

  let date = '';
  const dateM = html.match(/var\s+ct\s*=\s*['"]?(\d+)['"]?/);
  if (dateM) {
    const d = new Date(parseInt(dateM[1], 10) * 1000);
    date = d.toISOString().slice(0, 10);
  }

  let summary = '';
  const sumM = html.match(/var\s+msg_desc\s*=\s*['"]([^'"]*)['"]/);
  if (sumM) summary = unescapeHtml(sumM[1]);
  if (!summary) {
    const s2 = html.match(/<meta\s+property="og:description"\s+content="([^"]*)"/);
    if (s2) summary = unescapeHtml(s2[1]);
  }

  let cover = '';
  const coverM = html.match(/var\s+msg_cdn_url\s*=\s*['"]([^'"]+)['"]/);
  if (coverM) cover = coverM[1];

  return { title, date, summary, cover, url };
}

async function main() {
  const links = readMplist();
  console.log(`从 mplist.txt 读取到 ${links.length} 个链接\n`);

  const articles = [];
  for (let i = 0; i < links.length; i++) {
    const url = links[i];
    process.stdout.write(`[${i + 1}/${links.length}] 抓取 ${url} ... `);
    try {
      const info = await fetchArticle(url);
      if (!info.title) {
        console.log('无标题，跳过');
        continue;
      }
      console.log(`[${info.date}] ${info.title}`);
      const id =
        info.title
          .replace(/[^\w\u4e00-\u9fa5]/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '')
          .slice(0, 50) || `article-${i}`;
      articles.push({
        id,
        title: info.title,
        summary: info.summary || '',
        url: info.url,
        date: info.date || '',
        cover: info.cover || '/img/PikiwiDB-Logo.png',
      });
    } catch (e) {
      console.log(`失败: ${e.message}`);
    }
    // 礼貌延迟，避免被限流
    await new Promise((r) => setTimeout(r, 300));
  }

  // 按日期倒序（无日期的放最后）
  articles.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
  });

  console.log(`\n共获取 ${articles.length} 篇文章`);
  fs.writeFileSync(
    path.join(__dirname, 'articles.json'),
    JSON.stringify(articles, null, 2),
    'utf-8'
  );
  console.log('已写入 scripts/wechat-sync/articles.json');
}

main().catch((e) => console.error(e.message));
