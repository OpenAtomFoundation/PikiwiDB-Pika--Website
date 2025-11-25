import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--body', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
        <img src = "/img/PikiwiDB-Logo.png"/>
        </Heading>
        <p className="hero__subtitle">
          为海量数据存储设计的高可用键值数据库<br/>
          项目由开放原子基金会孵化
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/序言">
            阅读文档
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="PikiwiDB 是一款支持持久化存储的键值数据库">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
