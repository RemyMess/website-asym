// import SubTitle from '@/components/ant/subTitle';
import React from 'react';
// import BackgroundImage from '@/assets/images/ornament.svg';

// import ArticleIcon from '@/assets/icons/article.svg';

// import SeeMore from '@/components/ant/seeMore';
// import { urls } from '@/helpers/urls';
// import SmallPost from '@/components/posts/smallPost';
// import type { IBasicArticle } from '@/types/article';
// import React from 'react';
// import styles from './latestArticles.module.scss';

const LatestArticles = () => {
  return (
    <div>
      <p></p>
    </div>
  );
};

// const LatestArticles = ({
//   data,
//   title = 'Latest Articles',
// }: {
//   data: IBasicArticle[];
//   title?: string;
// }) => {
//   return (
//     <div className={`${styles.outer}`}>
//       <img
//         className={`basicBackgroundImage ${styles.backgroundImage}`}
//         src={BackgroundImage.src}
//         alt=""
//         role="presentation"
//       />
//       <div className={'container'}>
//         <SubTitle text="We share knowledge" />
//         <h2 className={styles.title}>
//           <img src={ArticleIcon.src} alt="" role="presentation" />
//           <span>{title}</span>
//         </h2>
//         <div className={styles.itemWrapper}>
//           {data.map((article: IBasicArticle) => (
//             <SmallPost data={article} key={article.title} />
//           ))}
//         </div>
//         <SeeMore text="See more" url={urls.resources.blog} />
//       </div>
//     </div>
//   );
// };

export default LatestArticles;
