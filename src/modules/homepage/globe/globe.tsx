import SubTitle from '@/components/ant/subTitle';
import React from 'react';
import Image from 'next/image';
import GlobeImage from '@/assets/images/globe.jpg';

import Icon from '@/assets/icons/icon.svg';
import styles from './globe.module.scss';

const data = [
  {
    body: 'Our systems are able to handle tens of thousands of requests per day.',
    bigText: '9.2K',
    smallText: 'Executions',
    icon: Icon,
  },
  {
    body: 'Devs hate to wait. We’re aiming for a sub-minute Time to Deployment.',
    bigText: '110s',
    smallText: 'Avg. TTD',
    icon: Icon,
  },
  {
    body: 'Mission-critical systems need to be up 24/7. We’re aiming for 99.99% uptime, with zero lost packets.',
    bigText: '99.99%',
    smallText: 'Uptime',
    icon: Icon,
  },
  {
    body: 'In the cloud, every milliscond counts. We’re aiming for a sub-15ms platform overhead.',
    bigText: '<60ms',
    smallText: 'Latency',
    icon: Icon,
  },
];

const Globe = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.globeWrap}>
        <Image src={GlobeImage} alt="" role="presentation" />
      </div>
      <div className={`container ${styles.inner}`}>
        <div className={styles.introWrap}>
          <SubTitle text="About us" />
          <h2 className={styles.introTitle}>A backbone for AI products</h2>
          <p className={styles.introBody}>
            Inferex makes building production-ready AI products as easy as your
            very first prototype. Our teams are based all around the globe,
            ready to help ambitious companies scale to hundreds of thousands of
            requests per day.
          </p>
          <p className={styles.introBody}>
            Interested? Chat with our founders today.
            {/* GT: CTA hyperlink to calendly? */}
          </p>
        </div>
        <div className={styles.features}>
          {data.map((item, index) => {
            const { body, bigText, smallText, icon } = item;
            return (
              <div
                key={item.body.slice(0, 10) + bigText}
                className={styles.feature}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={styles.topWrap}>
                  <Image src={icon} alt="" role="presentation" />
                  <div className={styles.topWrapText}>
                    <p className={styles.bigText}>{bigText}</p>
                    <p className={styles.smallText}>{smallText}</p>
                  </div>
                </div>
                <p className={styles.body}>{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Globe;
