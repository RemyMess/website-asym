// import Button from '@/components/ant/button/button';
// import type { IArticle } from '@/types/article';
// import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';

import styles from './mediumPost.module.scss';

const MediumPost = () => {
  // const MediumPost = ({ data }: { data: IArticle }) => {
  // const { title, description, image, category, url } = data;
  return (
    <article className={styles.outer}>
      <p></p>
      {/* <Link href={`/blog/${url}`}>
        <div className={styles.imgWrap}>
          <Image
            src={`${process.env.NEXT_PUBLIC_CMS_URL}${image.url}`}
            alt={title}
            width="352"
            height="210"
          />
          <div style={{ background: 'purple' }} className={styles.tag}>
            {category.category}
          </div>
        </div>
        <div className={styles.bottomWrap}>
          <div className={styles.textWrap}>
            <h3 className={`truncate-2 ${styles.title}`}>{title}</h3>
            <p className={`truncate-3  ${styles.text}`}>{description}</p>
          </div>
          <Button size="small">
            <span>Read more</span>
          </Button>
        </div>
      </Link> */}
    </article>
  );
};

export default MediumPost;
