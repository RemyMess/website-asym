import React from 'react';

import Icon from '@/assets/icons/icon.svg';
import SubTitle from '@/components/ant/subTitle';
import styles from './features.module.scss';

const data = [
  {
    title: 'Developer Obsessed',
    icon: Icon,
    body: 'Our painstakingly-crafted developer experience makes moving to Inferex a breeze. Don’t worry about clouds, queues, or containers: Just build product, add Inferex, and deploy.',
  },
  {
    title: 'Flexible',
    icon: Icon,
    body: 'We won’t hold you back. You can use any framework, scale any process, and deploy locally or on any cloud provider. You won’t even have to leave your editor.',
  },
  {
    title: 'Powerful',
    icon: Icon,
    body: 'With millions of things to worry about besides models, you’ll need something powerful. IX pipelines are adaptable super services: universal, realtime, schedulable, long-running, chained, distributed, and so much more.',
  },
  {
    title: 'Beyond Deployment',
    icon: Icon,
    body: 'Product doesn’t stop at production. We help manage, monitor, debug, and scale your workloads. We’re here to support you to, through, and beyond building a thriving business.',
  },
];

interface IFeaturesProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

const Features = ({ scrollRef }: IFeaturesProps) => {
  return (
    <div className={`${styles.outer} container`} ref={scrollRef}>
      <SubTitle text="Why use Inferex?" />
      <h2 className={styles.title}>
        Deploy & scale AI products instantly with Inferex.
      </h2>
      <div className={styles.itemWrapper}>
        {data.map((item, index) => {
          return (
            <div
              key={item.title}
              className={styles.item}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={item.icon.src}
                alt={item.title}
                className={styles.itemIcon}
              />
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemBody}>{item.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
