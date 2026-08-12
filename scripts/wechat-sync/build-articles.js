/**
 * 将 sogou_all.json 转换为 articles.json 格式（用于同步小工具的数据源）
 * 文章 url 使用搜狗微信搜索链接，用户点击后可在搜索结果中打开微信原文
 */
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('sogou_all.json', 'utf-8'));

const articles = data.map((item, i) => {
  const id =
    item.title
      .replace(/[^\w\u4e00-\u9fa5]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 50) || `article-${i}`;
  // 使用搜狗微信搜索链接，确保用户可以在浏览器中打开并找到微信原文
  const searchUrl = `https://weixin.sogou.com/weixin?type=2&query=${encodeURIComponent(item.title)}`;
  return {
    id,
    title: item.title,
    summary: item.summary,
    url: searchUrl,
    date: item.date,
    cover: '/img/PikiwiDB-Logo.png',
  };
});

fs.writeFileSync('articles.json', JSON.stringify(articles, null, 2), 'utf-8');
fs.writeFileSync('scripts/wechat-sync/articles.json', JSON.stringify(articles, null, 2), 'utf-8');
console.log(`已生成 ${articles.length} 篇文章到 articles.json`);
articles.forEach((a) => console.log(`[${a.date}] ${a.title}`));

