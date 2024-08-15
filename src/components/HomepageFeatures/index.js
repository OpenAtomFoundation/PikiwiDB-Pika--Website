import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '分布式架构',
    description: (
      <>
        为大规模数据存储而规划，支持结合 Proxy 映射软件构建分布式数据集群
      </>
    ),
  },
  {
    title: '大规模数据存储',
    description: (
      <>
        支持TB级别的高性能数据存储
      </>
    ),
  },
  {
    title: '快速故障转移',
    description: (
      <>
        在单点故障产生之时可以快速恢复服务，最大程度减少对业务的冲击
      </>
    ),
  },
  {
    title: '兼容 Redis',
    description: (
      <>
        缘起于对接 360 内部的数据存储需求，并被应用于替换 360 内部的 Redis 服务，顺利实现迁移
      </>
    ),
  },
  {
    title: '社区驱动发展',
    description: (
      <>
        在开放原子基金会指导下由开源社区驱动项目改进，吸收外部反馈，满足行业需求
      </>
    ),
  },
  {
    title: '协议友好',
    description: (
      <>
        采行 BSD 协议开放源代码，欢迎根据自身需要定制 PikiwiDB
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
