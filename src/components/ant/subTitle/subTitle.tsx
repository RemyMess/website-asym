import React from 'react';

import styles from './subTitle.module.scss';

const SubTitle = ({ text }: { text: string }) => {
  return <div className={styles.outer}>{text}</div>;
};

export default SubTitle;
