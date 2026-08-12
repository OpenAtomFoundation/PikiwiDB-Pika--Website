/**
 * 通过 Bing 搜索获取「Pika开源社区」公众号文章的真实 mp.weixin.qq.com 链接
 */
const fs = require('fs');

async function searchBing(query, count = 30) {
  const url = `https://www.bing.com/search?q=${encodeURIComponent(query)}&count=${count}`;
  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept-Language': 'zh-CN,zh;q=0.9',
    },
  });
  const text = await res.text();
  fs.writeFileSync('bing_result.html', text, 'utf-8');
  const matches = text.match(/https:\/\/mp\.weixin\.qq\.com\/s[^"'&<> ]+/g);
  return matches ? [...new Set(matches)] : [];
}

async function main() {
  const queries = [
    'site:mp.weixin.qq.com "Pika开源社区"',
    'site:mp.weixin.qq.com "PikiwiDB" "Pika"',
  ];
  const allLinks = new Set();
  for (const q of queries) {
    console.log(`搜索: ${q}`);
    const links = await searchBing(q);
    links.forEach((l) => allLinks.add(l));
    console.log(`  找到 ${links.length} 个链接`);
  }
  const arr = [...allLinks];
  console.log(`\n共找到 ${arr.length} 个唯一链接:`);
  arr.forEach((u) => console.log(u));
  fs.writeFileSync('bing_links.json', JSON.stringify(arr, null, 2), 'utf-8');
}

main().catch((e) => console.error(e.message));
