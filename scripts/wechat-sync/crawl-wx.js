/**
 * 从已知的微信文章链接开始，通过文章页面中的 pre_article_link / next_article_link
 * 遍历获取「Pika开源社区」公众号所有文章的真实链接和标题
 * 使用 mid 去重，持续向前遍历直到没有 pre_link
 */
const fs = require('fs');

const START_URLS = [
  'https://mp.weixin.qq.com/s/KFLPruSdB66TMRxUfR9PbQ',
];

async function fetchArticle(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    },
  });
  const html = await res.text();
  return html;
}

function unescapeHtml(s) {
  return s
    .replace(/'/g, "'")
    .replace(/"/g, '"')
    .replace(/&/g, '&')
    .replace(/</g, '<')
    .replace(/>/g, '>');
}

function parseArticle(html) {
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

  let preLink = '';
  const preM = html.match(/pre_article_link:\s*['"]([^'"]+)['"]/);
  if (preM) {
    preLink = preM[1].replace(/\\x26amp;/g, '&').replace(/&/g, '&');
    if (preLink === 'http://mp.weixin.qq.com/s?__biz=' || preLink === '') preLink = '';
  }

  let nextLink = '';
  const nextM = html.match(/next_article_link:\s*['"]([^'"]+)['"]/);
  if (nextM) {
    nextLink = nextM[1].replace(/\\x26amp;/g, '&').replace(/&/g, '&');
    if (nextLink === 'http://mp.weixin.qq.com/s?__biz=' || nextLink === '') nextLink = '';
  }

  let mid = '';
  const midM = html.match(/var\s+mid\s*=\s*['"]?(\d+)['"]?/);
  if (midM) mid = midM[1];

  return { title, date, summary, cover, preLink, nextLink, mid };
}

async function main() {
  const articles = [];
  const visitedMids = new Set();

  async function crawl(url) {
    if (!url) return;
    const midInUrl = url.match(/mid=(\d+)/);
    if (midInUrl && visitedMids.has(midInUrl[1])) return;
    if (midInUrl) visitedMids.add(midInUrl[1]);

    console.log(`抓取: ${url.slice(0, 80)}...`);
    let html;
    try {
      html = await fetchArticle(url);
    } catch (e) {
      console.log(`  抓取失败: ${e.message}`);
      return;
    }
    const info = parseArticle(html);
    if (!info.title) {
      console.log(`  无标题，跳过`);
      return;
    }
    console.log(`  [${info.date}] ${info.title}`);
    articles.push({
      title: info.title,
      date: info.date,
      summary: info.summary,
      cover: info.cover || '/img/PikiwiDB-Logo.png',
      url,
      mid: info.mid,
    });

    if (info.preLink) {
      await crawl(info.preLink);
    }
    if (info.nextLink) {
      await crawl(info.nextLink);
    }
  }

  for (const url of START_URLS) {
    await crawl(url);
  }

  const seen = new Set();
  const unique = [];
  for (const a of articles) {
    const key = a.mid || a.url;
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(a);
  }

  unique.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  console.log(`\n共获取 ${unique.length} 篇文章:`);
  unique.forEach((a) => console.log(`[${a.date}] ${a.title}`));

  fs.writeFileSync('wx_articles.json', JSON.stringify(unique, null, 2), 'utf-8');
}

main().catch((e) => console.error(e.message));
