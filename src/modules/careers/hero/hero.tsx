import Button from '@/components/ant/button/button';
import Image from 'next/image';
import React from 'react';

import Image1 from '@/assets/images/careers/h1.png';
import Image2 from '@/assets/images/careers/h2.png';
import Image3 from '@/assets/images/careers/h3.png';

import Icon1 from '@/assets/icons/network.svg';
import Icon2 from '@/assets/icons/ai.svg';

import { urls } from '@/helpers/urls';
import styles from './hero.module.scss';

const hero = () => {
  return (
    <div className={`container ${styles.outer}`}>
      <div>
        <h1 className={styles.title}>Join our team</h1>
        <h2 className={styles.subTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          cupiditate, inventore nihil dolore. Similique cupiditate, inventore.
        </h2>
        <Button
          size="large"
          href={{ pathname: urls.careers.positions, isInternal: true }}
        >
          <span>See Positions</span>
        </Button>
      </div>
      <div className={styles.imageWrap}>
        <Image
          src={Image1}
          alt=""
          role="presentation"
          className={styles.image1}
        />
        <Image
          src={Image2}
          alt=""
          role="presentation"
          className={styles.image2}
        />
        <Image
          src={Image3}
          alt=""
          role="presentation"
          className={styles.image3}
        />

        <Image
          src={Image1}
          alt=""
          role="presentation"
          className={styles.image4}
        />
        <div className={`${styles.badge} ${styles.badge1}`}>
          <span>Join our team</span>
          <img src={Icon1.src} alt="" role="presentation" />
        </div>
        <div className={`${styles.badge} ${styles.badge2}`}>
          <span>Create the future</span>
          <img src={Icon2.src} alt="" role="presentation" />
        </div>
      </div>
    </div>
  );
};

export default hero;
