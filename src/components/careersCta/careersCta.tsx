import Button from '@/components/ant/button/button';
import React from 'react';

import styles from './careersCta.module.scss';

interface ICareersCtaProps {
  buttonText?: string;
  href?: {
    pathname: string;
    isInternal?: boolean;
  };
  onClick?: () => void;
}

const CareersCta = ({
  buttonText = 'See Positions',
  href = undefined,
  onClick = undefined,
}: ICareersCtaProps) => {
  return (
    <div className={`container ${styles.outer}`}>
      <h2 className={styles.title}>Interested? You can apply now!</h2>
      <p className={styles.subTitle}>
        See what we offer and become a part of our team
      </p>
      <Button size="large" href={href} onClick={() => onClick && onClick()}>
        <span>{buttonText}</span>
      </Button>
    </div>
  );
};

export default CareersCta;
