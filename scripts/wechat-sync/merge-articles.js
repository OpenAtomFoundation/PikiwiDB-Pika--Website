/**
 * 合并微信遍历获取的真实链接文章与搜狗获取的文章列表
 * - 有真实 mp.weixin.qq.com 链接的，使用真实链接
 * - 没有真实链接的，使用搜狗微信搜索链接作为回退
 */
const fs = require('fs');

const wxArticles = JSON.parse(fs.readFileSync('wx_articles.json', 'utf-8'));
const sogouArticles = JSON.parse(fs.readFileSync('sogou_all.json', 'utf-8'));

// 建立标题到真实链接的映射
const realUrlMap = new Map();
for (const a of wxArticles) {
  // 标准化标题用于匹配
  const normTitle = a.title.replace(/\s+/g, '').toLowerCase();
  realUrlMap.set(normTitle, a.url);
  // 也用原始标题
  realUrlMap.set(a.title, a.url);
}

const result = [];
const seenTitles = new Set();

// 先处理搜狗文章（17篇，覆盖面更广）
for (const s of sogouArticles) {
  const normTitle = s.title.replace(/\s+/g, '').toLowerCase();
  const realUrl = realUrlMap.get(normTitle) || realUrlMap.get(s.title);
  const url = realUrl || `https://weixin.sogou.com/weixin?type=2&query=${encodeURIComponent(s.title)}`;
  const id =
    s.title
      .replace(/[^\w\u4e00-\u9fa5]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 50) || `article-${result.length}`;

  // 优先使用微信真实文章的摘要（更完整），回退到搜狗摘要
  const wxMatch = wxArticles.find(
    (w) => w.title.replace(/\s+/g, '').toLowerCase() === normTitle
  );

  result.push({
    id,
    title: s.title,
    summary: (wxMatch && wxMatch.summary) || s.summary,
    url,
    date: s.date,
    cover: '/img/PikiwiDB-Logo.png',
  });
  seenTitles.add(normTitle);
}

// 补充微信遍历到但搜狗没有的文章
for (const w of wxArticles) {
  const normTitle = w.title.replace(/\s+/g, '').toLowerCase();
  if (seenTitles.has(normTitle)) continue;
  const id =
    w.title
      .replace(/[^\w\u4e00-\u9fa5]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 50) || `article-${result.length}`;
  result.push({
    id,
    title: w.title,
    summary: w.summary,
    url: w.url,
    date: w.date,
    cover: '/img/PikiwiDB-Logo.png',
  });
  seenTitles.add(normTitle);
}

// 按日期倒序
result.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

console.log(`共合并 ${result.length} 篇文章:`);
result.forEach((a) => {
  const isReal = a.url.includes('mp.weixin.qq.com/s');
  console.log(`[${a.date}]${isReal ? ' [真实链接]' : ' [搜索链接]'} ${a.title}`);
});

// 写入 articles.json
fs.writeFileSync('scripts/wechat-sync/articles.json', JSON.stringify(result, null, 2), 'utf-8');
console.log('\n已写入 scripts/wechat-sync/articles.json');
