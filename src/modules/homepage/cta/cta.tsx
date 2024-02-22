import React from 'react';
import { urls } from '@/helpers/urls';
import Button from '@/components/ant/button/button';
import Icon1 from '@/assets/icons/icon.svg';
import SingleFeature from '@/components/ant/singleFeature';
import styles from './cta.module.scss';

const Cta = () => {
  return (
    <div className={`container ${styles.outer}`}>
      <div className={styles.leftSide}>
        <h2 className={styles.title}>Interested? Join the waitlist!</h2>
        <p className={styles.body}>
          Beta slots are limited, be the first to get access.
        </p>
        <p className={styles.body}>
          We’ll reach out in the next few days to see how we can help.
        </p>
        <div className={styles.buttonWrapper}>
          {/* GT: Join waitlist CTA / form button */}
          <Button
            variant="cta"
            size="large"
            href={{ pathname: urls.external.console, isInternal: false }}
          >
            <span>Join Waitlist</span>
          </Button>
        </div>
      </div>
      <div className={styles.rightSide} data-aos="fade-up">
        <SingleFeature
          title="Close to the metal"
          text="Where possible, we host our own infrastructure to ensure the best performance, security, and price."
          icon={Icon1.src}
          href={urls.home}
        />
        <SingleFeature
          title="Accelerated Computing"
          text="Need to use a GPU? Inferex takes care of drivers & libraries, so you can focus on your project."
          icon={Icon1.src}
          href={urls.home}
        />
      </div>
    </div>
  );
};

export default Cta;
