import React from 'react';
import Link from 'next/link';

import styles from './singleFeature.module.scss';

interface ISingleFeatureProps {
  icon: string;
  title: string;
  text: string;
  href: string;
}

const singleFeature = ({ icon, title, text, href }: ISingleFeatureProps) => {
  return (
    <div className={styles.item}>
      <img className={styles.itemImage} src={icon} alt="" role="presentation" />
      <h3 className={styles.itemTitle}>{title}</h3>
      <p className={styles.itemText}>{text}</p>
      <Link href={href} className={styles.itemAnchor}>
        How it works
      </Link>
    </div>
  );
};

export default singleFeature;
