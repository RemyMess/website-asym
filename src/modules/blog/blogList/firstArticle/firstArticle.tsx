// import React from 'react';
// import Image from 'next/image';
// import Button from '@/components/ant/button/button';
// import type { IArticle } from '@/types/article';
import styles from './firstArticle.module.scss';

const FirstArticle = () => {
  // const FirstArticle = ({ data }: { data: IArticle }) => {
  //   const { title, description, image, url } = data;
  return (
    <div className={`container ${styles.outer}`}>
      {/* <div className={styles.inner}>
        <div className={styles.textWrap}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>{description}</p>
          <Button href={{ pathname: `/blog/${url}`, isInternal: true }}>
            <span>Read more</span>
          </Button>
        </div>
        <div className={styles.imageWrap}>
          <Image
            className={styles.image}
            src={`${process.env.NEXT_PUBLIC_CMS_URL}${image.url}`}
            alt={title}
            width="640"
            height="320"
          />
        </div>
      </div> */}
    </div>
  );
};

export default FirstArticle;
