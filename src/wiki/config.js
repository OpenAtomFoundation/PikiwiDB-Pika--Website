/**
 * GitHub Wiki 运行时配置。
 *
 * Wiki 目录页（/wiki）会实时拉取 GitHub Wiki 的 Home.md，按其中的
 * 二级标题（## 分类）和列表项（- [标题](链接)）解析出分类目录，
 * 所有链接均指向 GitHub Wiki 上的完整地址，不在本站渲染文章内容。
 *
 * 当浏览器实时拉取失败（网络受限等）时，回退到由
 * scripts/wiki-sync/sync.js 预生成的 static/wiki-pages.json。
 */

/** GitHub Wiki 所属仓库（owner/repo） */
export const WIKI_REPO = 'OpenAtomFoundation/pikiwidb';

/** GitHub Wiki 首页（目录页）地址 */
export const WIKI_BASE_URL = `https://github.com/${WIKI_REPO}/wiki`;

/** Home.md 的 raw 地址，前端实时拉取该文件解析目录 */
export const WIKI_HOME_RAW_URL = `https://raw.githubusercontent.com/wiki/${WIKI_REPO}/Home.md`;

/** 预生成的兜底目录清单（构建时由同步工具写入 static 目录） */
export const WIKI_FALLBACK_MANIFEST = '/wiki-pages.json';

/**
 * 将 Home.md 中的链接规范化为可在浏览器中打开的完整 GitHub Wiki URL。
 *
 * Home.md 中的链接可能是：
 *  - 绝对 URL（https://github.com/.../wiki/Foo、https://mp.weixin.qq.com/... 等）→ 原样返回；
 *  - 相对 wiki 链接（wiki/Foo 或 ./wiki/Foo）→ 补全为 https://github.com/<repo>/wiki/Foo；
 *  - 其他相对链接 → 原样返回（由浏览器自行解析）。
 *
 * 注意：GitHub Wiki 的页面 URL 对中文/空格等使用 encodeURIComponent 编码，
 * 这里对相对 wiki 链接的 slug 做编码处理，保证链接可被正确打开。
 */
export function resolveWikiUrl(href) {
  if (!href) return href;

  // 绝对 URL 直接返回
  if (/^https?:\/\//i.test(href)) return href;

  // 相对 wiki 链接：wiki/<slug> 或 ./wiki/<slug> 或 /wiki/<slug>
  const relativeMatch = href.replace(/\/$/, '').match(/^(?:\.\/|\/)?wiki\/(.+)$/i);
  if (relativeMatch) {
    const slug = decodeUrlPart(relativeMatch[1]);
    return `${WIKI_BASE_URL}/${encodeURIComponent(slug)}`;
  }

  return href;
}

function decodeUrlPart(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

/**
 * 解析 Home.md 文本，按二级标题分类、列表项提取链接。
 *
 * 返回结构：
 *   [{ title: '分类名', items: [{ title: '显示名', href: '完整URL' }] }]
 *
 * 解析规则与 scripts/wiki-sync/sync.js 保持一致：
 *  - `## 标题` 作为分类；
 *  - `- [显示名](链接)` 作为分类下的条目；
 *  - 链接统一通过 resolveWikiUrl 规范化为完整 GitHub Wiki URL。
 */
export function parseHomeMarkdown(home) {
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
