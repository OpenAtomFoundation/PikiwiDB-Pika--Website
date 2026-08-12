import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {
  WIKI_BASE_URL,
  WIKI_HOME_RAW_URL,
  WIKI_FALLBACK_MANIFEST,
  parseHomeMarkdown,
} from '../../wiki/config';
import styles from './wiki.module.css';

/**
 * Wiki 目录页。
 *
 * 每次打开/刷新页面时，优先实时拉取 GitHub Wiki 的 Home.md 并解析出分类目录，
 * 所有条目链接均指向 GitHub Wiki 上的完整地址（不在本站渲染文章内容）。
 *
 * 当实时拉取失败（网络受限、GitHub 不可达等）时，回退到构建时由
 * scripts/wiki-sync/sync.js 预生成的 static/wiki-pages.json，保证页面始终可用。
 */
export default function WikiList() {
  const [categories, setCategories] = useState(null);
  const [source, setSource] = useState(''); // 'live' | 'fallback'
  const [generatedAt, setGeneratedAt] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function loadLive() {
      // 1. 实时拉取 Home.md
      const res = await fetch(`${WIKI_HOME_RAW_URL}?t=${Date.now()}`, {
        cache: 'no-store',
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      const parsed = parseHomeMarkdown(text);
      if (!parsed || parsed.length === 0) {
        throw new Error('Home.md 解析后无分类内容');
      }
      return {categories: parsed, source: 'live', generatedAt: ''};
    }

    async function loadFallback() {
      // 2. 回退到预生成 JSON
      const res = await fetch(`${WIKI_FALLBACK_MANIFEST}?t=${Date.now()}`, {
        cache: 'no-store',
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const manifest = await res.json();
      if (!Array.isArray(manifest.categories)) {
        throw new Error('兜底清单格式无效');
      }
      return {
        categories: manifest.categories,
        source: 'fallback',
        generatedAt: manifest.generatedAt || '',
      };
    }

    async function load() {
      try {
        const live = await loadLive();
        if (!cancelled) {
          setCategories(live.categories);
          setSource(live.source);
          setGeneratedAt(live.generatedAt);
          setLoading(false);
        }
        return;
      } catch (liveError) {
        // 实时拉取失败，尝试兜底
        try {
          const fallback = await loadFallback();
          if (!cancelled) {
            setCategories(fallback.categories);
            setSource(fallback.source);
            setGeneratedAt(fallback.generatedAt);
            setLoading(false);
          }
          return;
        } catch (fallbackError) {
          if (!cancelled) {
            setError(
              `实时拉取失败（${liveError.message}），兜底清单也失败（${fallbackError.message}）`
            );
            setLoading(false);
          }
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Layout
      title="文档 - PikiwiDB"
      description="PikiwiDB 文档 - 同步自 GitHub Wiki">
      <div className="container container--lg margin-vert--lg">
        <div className={styles.wikiHeader}>
          <h1>📖 PikiwiDB 文档</h1>
          <p className={styles.wikiSubtitle}>
            以下分类、名称、顺序和链接实时同步自{' '}
            <Link to={WIKI_BASE_URL}>GitHub Wiki</Link>，点击链接将在 GitHub
            Wiki 上打开对应文章。
          </p>
          {source === 'live' && (
            <p className={styles.wikiUpdated}>
              数据来源：实时拉取 GitHub Wiki Home.md
            </p>
          )}
          {source === 'fallback' && generatedAt && (
            <p className={styles.wikiUpdated}>
              数据来源：预生成清单（实时拉取失败，最近同步时间：
              {new Date(generatedAt).toLocaleString('zh-CN')}）
            </p>
          )}
        </div>

        {loading && (
          <div className={styles.loading}>
            <div className={styles.loadingSpinner} />
            <p>正在实时拉取 GitHub Wiki 目录...</p>
          </div>
        )}

        {!loading && error && (
          <div className={styles.error}>
            <div className={styles.errorBox}>
              <h3>⚠️ 无法读取 Wiki 目录</h3>
              <p>{error}</p>
              <p>
                你可以直接访问{' '}
                <Link to={WIKI_BASE_URL}>GitHub Wiki 首页</Link> 查看目录。
              </p>
            </div>
          </div>
        )}

        {!loading && !error && categories && (
          categories.map((category) => (
            <section className={styles.category} key={category.title}>
              <h2 className={styles.categoryTitle}>{category.title}</h2>
              <ul className={styles.pageList}>
                {category.items.map((item, index) => (
                  <li key={`${item.title}-${item.href}-${index}`}>
                    <Link
                      to={item.href}
                      target="_blank"
                      rel="noopener noreferrer">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))
        )}

        <div className={styles.wikiFooter}>
          <p>
            Wiki 原始页面：{' '}
            <Link to={WIKI_BASE_URL}>PikiwiDB Wiki</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
