/**
 * 跟随搜狗跳转链接，获取真实的 mp.weixin.qq.com 文章链接
 */
const fs = require('fs');

const parsed = JSON.parse(fs.readFileSync('sogou_parsed.json', 'utf-8'));

async function resolveLink(sogouUrl) {
  try {
    const res = await fetch(sogouUrl, {
      redirect: 'manual',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });
    // 搜狗跳转可能返回 302，Location 头是真实链接
    const location = res.headers.get('location');
    if (location) return location;
    // 如果是 200，可能返回 HTML，里面嵌套跳转
    if (res.status === 200) {
      const text = await res.text();
      const m = text.match(/url\s*=\s*['"](https?:\/\/mp\.weixin\.qq\.com[^'"]+)['"]/);
      if (m) return m[1];
      const m2 = text.match(/var\s+url\s*=\s*['"]([^'"]+)['"]/);
      if (m2) return m2[1];
    }
    return null;
  } catch (e) {
    return null;
  }
}

async function main() {
  for (const item of parsed) {
    const real = await resolveLink(item.sogouLink);
    item.realUrl = real;
    console.log(`[${item.date}] ${item.title}`);
    console.log(`  real: ${real || '(未获取到)'}`);
  }
  fs.writeFileSync('sogou_resolved.json', JSON.stringify(parsed, null, 2), 'utf-8');
  console.log('\n已保存到 sogou_resolved.json');
}

main();
