import React from 'react';

// import React, { useState, useEffect } from 'react';
// import Filters from '@/components/filters';
// import ArticleIcon from '@/assets/icons/article.svg';
// import MediumPost from '@/components/posts/mediumPost';
// import SmallPost from '@/components/posts/smallPost';
// import type { IArticle } from '@/types/article';
// import FirstArticle from './firstArticle';

// import styles from './blogList.module.scss';

const BlogList = () => {
  // const BlogList = ({ initialData }: { initialData: IArticle[] }) => {
  // const firstAricle = initialData[0];
  // const restOfArticles = initialData.slice(1);
  // const [data, setData] = useState(restOfArticles);
  // const filtersArray = ['Development', 'CLI', 'Product'];
  // const [selectedFilters, setSelectedFilters] = useState<string>('');

  // const resetFilters = () => {
  //   setSelectedFilters('');
  // };
  // const selectFilter = (filter: string) => {
  //   setSelectedFilters(filter);
  // };

  // useEffect(() => {
  //   if (selectedFilters) {
  //     const filteredData = initialData.filter(
  //       (item) => item.category.category === selectedFilters
  //     );
  //     setData(filteredData);
  //   } else {
  //     setData(restOfArticles);
  //   }
  // }, [selectedFilters]);

  return (
    <>
      {/* <FirstArticle data={firstAricle} />
      <Filters
        title="Browse by categories"
        filtersArray={filtersArray}
        resetFilters={resetFilters}
        selectFilter={selectFilter}
        selectedFilters={selectedFilters}
      />
      <div className={`container`}>
        <h2 className={styles.title}>
          <img src={ArticleIcon.src} alt="" role="presentation" />
          <span>Latest articles</span>
        </h2>
        <div className={styles.articlesInner}>
          {data.map((article) => (
            <MediumPost key={article.title} data={article} />
          ))}
        </div>
        <div className={styles.articlesInnerMobile}>
          {data.map((article) => (
            <SmallPost key={article.title} data={article} />
          ))}
        </div>
      </div> */}
    </>
  );
};

export default BlogList;
