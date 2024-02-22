import React from 'react';
import Image from 'next/image';
import JoinTeamImage from '@/assets/images/careers/joinTeam.png';

import styles from './hero.module.scss';
const Hero = () => {
  return (
    <div className={`container ${styles.outer}`}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Join our team</h1>
        <p className={styles.body}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          debitis veritatis explicabo ab, velit tenetur asperiores, molestias,
          earum aliquam
        </p>
      </div>
      <Image
        className={styles.heroImage}
        src={JoinTeamImage}
        alt={'Join our team'}
      />
    </div>
  );
};

export default Hero;
