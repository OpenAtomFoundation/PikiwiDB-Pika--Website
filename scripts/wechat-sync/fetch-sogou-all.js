/**
 * 抓取搜狗微信搜索「Pika开源社区」所有页的文章列表
 * 生成包含真实标题、摘要、日期、搜狗跳转链接的 articles.json
 */
const fs = require('fs');

async function fetchPage(page) {
  const url = `https://weixin.sogou.com/weixin?type=2&query=Pika%E5%BC%80%E6%BA%90%E7%A4%BE%E5%8C%BA&ie=utf8&page=${page}`;
  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept-Language': 'zh-CN,zh;q=0.9',
    },
  });
  return res.text();
}

function parsePage(html) {
  const results = [];
  const blockRe =
    /<h3>\s*<a[^>]*href="([^"]+)"[^>]*id="sogou_vr_11002601_title_(\d+)"[^>]*>([\s\S]*?)<\/a>/g;
  const summaryRe =
    /<p class="txt-info" id="sogou_vr_11002601_summary_(\d+)">([\s\S]*?)<\/p>/g;
  const accountRe =
    /<span class="all-time-y2">([^<]+)<\/span>/g;

  const summaries = {};
  let m;
  while ((m = summaryRe.exec(html)) !== null) {
    summaries[m[1]] = m[2]
      .replace(/<[^>]+>/g, '')
      .replace(/&ldquo;/g, '"')
      .replace(/&rdquo;/g, '"')
      .replace(/&bull;/g, '·')
      .replace(/&/g, '&')
      .replace(/\s+/g, ' ')
      .trim();
  }

  const accounts = [];
  while ((m = accountRe.exec(html)) !== null) {
    accounts.push(m[1].trim());
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
    titles[idx] = m[3]
      .replace(/<[^>]+>/g, '')
      .replace(/&ldquo;/g, '"')
      .replace(/&rdquo;/g, '"')
      .replace(/&/g, '&')
      .trim();
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
    // 只保留 Pika开源社区 账号的文章
    const account = accounts[i] || '';
    results.push({
      title: titles[idx],
      summary: summaries[idx] || '',
      date,
      account,
      sogouLink: links[idx],
    });
  });

  return results;
}

async function main() {
  const all = [];
  for (let page = 1; page <= 5; page++) {
    console.log(`抓取第 ${page} 页...`);
    let html;
    try {
      html = await fetchPage(page);
    } catch (e) {
      console.log(`  第 ${page} 页抓取失败: ${e.message}`);
      continue;
    }
    fs.writeFileSync(`sogou_page_${page}.html`, html, 'utf-8');
    const items = parsePage(html);
    console.log(`  解析到 ${items.length} 条`);
    all.push(...items);
  }

  // 只保留来自 Pika开源社区 的文章，去重
  const seen = new Set();
  const filtered = [];
  for (const item of all) {
    if (item.account !== 'Pika开源社区') continue;
    if (seen.has(item.title)) continue;
    seen.add(item.title);
    filtered.push(item);
  }

  // 按日期倒序
  filtered.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  console.log(`\n共 ${filtered.length} 篇 Pika开源社区 文章:`);
  filtered.forEach((r) =>
    console.log(`[${r.date}] ${r.title}`)
  );

  fs.writeFileSync('sogou_all.json', JSON.stringify(filtered, null, 2), 'utf-8');
}

main().catch((e) => console.error(e.message));
