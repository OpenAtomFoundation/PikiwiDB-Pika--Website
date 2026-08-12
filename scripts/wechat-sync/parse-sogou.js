/**
 * 从搜狗微信搜索结果页解析「Pika开源社区」公众号文章
 * 提取标题、摘要、时间戳、搜狗跳转链接
 */
const fs = require('fs');

const html = fs.readFileSync('sogou_result.html', 'utf-8');

const results = [];
const blockRe =
  /<h3>\s*<a[^>]*href="([^"]+)"[^>]*id="sogou_vr_11002601_title_(\d+)"[^>]*>([\s\S]*?)<\/a>/g;
const summaryRe =
  /<p class="txt-info" id="sogou_vr_11002601_summary_(\d+)">([\s\S]*?)<\/p>/g;

const summaries = {};
let m;
while ((m = summaryRe.exec(html)) !== null) {
  const idx = m[1];
  const text = m[2]
    .replace(/<[^>]+>/g, '')
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&bull;/g, '·')
    .replace(/&/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
  summaries[idx] = text;
}

const timeStamps = [];
const tsRe =
  /<span class="s2"><script>document\.write\(timeConvert\('(\d+)'\)\)/g;
while ((m = tsRe.exec(html)) !== null) {
  timeStamps.push(parseInt(m[1], 10));
}

const titles = {};
const links = {};
while ((m = blockRe.exec(html)) !== null) {
  const link = m[1].replace(/&/g, '&');
  const idx = m[2];
  const title = m[3]
    .replace(/<[^>]+>/g, '')
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&/g, '&')
    .trim();
  titles[idx] = title;
  links[idx] = link.startsWith('http')
    ? link
    : 'https://weixin.sogou.com' + link;
}

const indices = Object.keys(titles).sort((a, b) => Number(a) - Number(b));
indices.forEach((idx, i) => {
  const ts = timeStamps[i];
  let date = '';
  if (ts) {
    const d = new Date(ts * 1000);
    if (!isNaN(d.getTime()) && d.getFullYear() > 2015 && d.getFullYear() < 2035) {
      date = d.toISOString().slice(0, 10);
    }
  }
  results.push({
    idx,
    title: titles[idx],
    summary: summaries[idx] || '',
    date,
    sogouLink: links[idx],
    timestamp: ts,
  });
});

fs.writeFileSync('sogou_parsed.json', JSON.stringify(results, null, 2), 'utf-8');
console.log(`解析到 ${results.length} 条结果`);
results.forEach((r) =>
  console.log(
    `[${r.date}] ${r.title}\n   ${r.summary.slice(0, 80)}...\n   ts=${r.timestamp}`
  )
);
