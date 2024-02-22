import React from 'react';
// import Link from 'next/link';
// import Chevron from '@/assets/icons/chevron.svg';

// import type { IBasicArticle } from '@/types/article';
import styles from './smallPost.module.scss';

const SmallPost = () => {
  // const SmallPost = ({ data }: { data: IBasicArticle }) => {
  // const { title, description, image, url } = data;

  return (
    <article
      className={styles.item}
      // style={{
      //   backgroundImage: `url(${process.env.NEXT_PUBLIC_CMS_URL}${image.url})`,
      // }}
    >
      {/* <Link href={`/blog/${url}}`}>
        <div className={styles.itemInner}>
          <h3 className={`truncate-1 ${styles.itemTitle}`}>{title}</h3>
          <p className={`truncate-2 ${styles.itemBody}`}>{description}</p>
        </div>
        <div className={styles.itemFooter}>
          Read more{' '}
          <img
            src={Chevron.src}
            className={styles.arrow}
            alt=""
            role="presentation"
          />
        </div>
      </Link> */}
    </article>
  );
};

export default SmallPost;
