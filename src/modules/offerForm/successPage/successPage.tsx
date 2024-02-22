import React from 'react';

import SuccessIcon from '@/assets/icons/success.svg';
import styles from './successPage.module.scss';

const SuccessPage = () => {
  return (
    <div className={styles.outer}>
      <p className={styles.subTitle}>You applied for the offer</p>
      <p className={styles.title}>Thank you!</p>
      <p className={styles.text}>
        Your application has been submited. <br /> We will be in touch shortly.
      </p>
      <img
        className={styles.image}
        src={SuccessIcon.src}
        alt=""
        role="presentation"
      />
    </div>
  );
};

export default SuccessPage;
