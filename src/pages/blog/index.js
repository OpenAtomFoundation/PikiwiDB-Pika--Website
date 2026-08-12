import React, {useState, useEffect} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {
  WECHAT_ARTICLES,
  WECHAT_ACCOUNT_NAME,
  WECHAT_ACCOUNT_URL,
  WECHAT_LAST_SYNCED,
} from '../../wechat/config';
import styles from './index.module.css';

export default function BlogList() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    setLastUpdated(`${d.getFullYear()}-${pad(d.getMonth() + 1)}`);
  }, []);

  return (
    <Layout
      title="博客 - PikiwiDB"
      description={`PikiwiDB 博客 - 来自微信公众号「${WECHAT_ACCOUNT_NAME}」`}>
      <div className="container container--lg margin-vert--lg">
        <div className={styles.blogHeader}>
          <h1>📝 PikiwiDB 博客</h1>
          <p className={styles.blogSubtitle}>
            文章来自微信公众号「{WECHAT_ACCOUNT_NAME}」，点击文章卡片即可在微信中阅读全文。
          </p>
          <div className={styles.blogStats}>
            <div className={styles.blogStat}>
              <div className={styles.blogStatNumber}>
                {WECHAT_ARTICLES.length}
              </div>
              <div className={styles.blogStatLabel}>篇文章</div>
            </div>
            {WECHAT_LAST_SYNCED && (
              <div className={styles.blogStat}>
                <div className={styles.blogStatNumber}>
                  {WECHAT_LAST_SYNCED}
                </div>
                <div className={styles.blogStatLabel}>最近同步</div>
              </div>
            )}
          </div>
          {lastUpdated && (
            <p className={styles.blogUpdated}>
              页面加载时间：{lastUpdated}
            </p>
          )}
        </div>

        {WECHAT_ARTICLES.length === 0 ? (
          <div className={styles.emptyState}>
            <p>暂无文章</p>
          </div>
        ) : (
          <div className={styles.blogGrid}>
            {WECHAT_ARTICLES.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.blogCard}>
                <div className={styles.blogCardBody}>
                  <div className={styles.blogCardTitle}>{article.title}</div>
                  <div className={styles.blogCardSummary}>
                    {article.summary}
                  </div>
                  <div className={styles.blogCardMeta}>
                    <span>{article.date}</span>
                    <span className={styles.blogReadMore}>阅读全文 →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className={styles.blogFooter}>
          <h3>关注「{WECHAT_ACCOUNT_NAME}」</h3>
          <p>
            在微信中搜索「{WECHAT_ACCOUNT_NAME}」关注我们的公众号，
            <br />
            获取 PikiwiDB 最新动态、技术文章和版本发布信息。
          </p>
          <a
            href={WECHAT_ACCOUNT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.followButton}>
            了解更多
          </a>
        </div>
      </div>
    </Layout>
  );
}
