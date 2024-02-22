import React from 'react';

import BackgroundImage from '@/assets/images/ornament.svg';
import Img1 from '@/assets/images/careers/img1.png';
import Img2 from '@/assets/images/careers/img2.png';
import Image from 'next/image';
import SubTitle from '@/components/ant/subTitle';
import styles from './joinUs.module.scss';

const data = [
  {
    tag: 'Vision',
    title: 'Join Us',
    body: [
      'Description about the company. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'In arcu cursus euismod quis viverra nibh cras. In massa tempor nec feugiat nisl pretium fusce. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In massa tempor nec feugiat nisl pretium fusce.',
    ],
    image: Img1,
  },
  {
    tag: 'Vision',
    title: 'How does it look like?',
    body: [
      'Description about the company. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'In arcu cursus euismod quis viverra nibh cras. In massa tempor nec feugiat nisl pretium fusce. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In massa tempor nec feugiat nisl pretium fusce.',
    ],
    image: Img2,
  },
];

const JoinUs = () => {
  return (
    <div className={styles.outer}>
      <img
        className={`basicBackgroundImage ${styles.backgroundImage}`}
        src={BackgroundImage.src}
        alt=""
        role="presentation"
      />
      <div className={`container`}>
        {data.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              className={styles.item}
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {isEven && (
                <Image
                  className={styles.image}
                  src={item.image}
                  alt=""
                  role="presentation"
                  style={{ padding: '0 var(--gap) 0 0 ' }}
                  priority={true}
                />
              )}
              <div className={styles.content}>
                <SubTitle text={item.tag} />
                <h3 className={styles.title}>{item.title}</h3>
                <div>
                  <Image
                    className={styles.imageMobile}
                    src={item.image}
                    alt=""
                    role="presentation"
                  />
                  {item.body.map((text) => {
                    return (
                      <p className={styles.text} key={text}>
                        {text}
                      </p>
                    );
                  })}
                </div>
              </div>
              {!isEven && (
                <Image
                  className={styles.image}
                  src={item.image}
                  alt=""
                  role="presentation"
                  style={{ padding: '0 0 0 var(--gap)' }}
                  priority={true}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JoinUs;
