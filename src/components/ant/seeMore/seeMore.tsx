import React from 'react';
import Link from 'next/link';
import Chevron from '@/assets/icons/chevron.svg';

import styles from './seeMore.module.scss';

interface ISeeMoreProps {
  text: string;
  url: string;
}

const SeeMore = ({ text, url }: ISeeMoreProps) => {
  return (
    <div className={styles.outer}>
      <Link href={url}>
        <span>{text}</span>
        <img src={Chevron.src} alt="" role="presentation" />
      </Link>
    </div>
  );
};

export default SeeMore;
