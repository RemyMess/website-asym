import React from 'react';
import ThankYouIcon from '@/assets/icons/thankyou.svg';
import ChevronIcon from '@/assets/icons/chevron.svg';
import BackgroundImage from '@/assets/images/ornament.svg';
import { gaActions, gaCategories, gaEvent } from '@/utils/ga';
import styles from './thankyou.module.scss';

const ThankYou = () => {
  const handleMeetingClick = () => {
    gaEvent({
      category: gaCategories.click,
      action: gaActions.scheduleDemoThankYou,
    });
  };

  return (
    <div className={`${styles.thankYou} container`}>
      <img
        className={`basicBackgroundImage ${styles.backgroundImage}`}
        src={BackgroundImage.src}
        alt=""
        role="presentation"
      />
      <h1>You&apos;re awesome! Thank you for your interest. 🤗</h1>
      <h2>
        As of now, access is <b>invitation-only.</b>
      </h2>
      <img src={ThankYouIcon.src} alt="" role="presentation" />
      <a
        onClick={() => handleMeetingClick()}
        href={process.env.NEXT_PUBLIC_MEETING_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Get exclusive access!</span>
        <img src={ChevronIcon.src} alt="" role="presentation" />
      </a>
    </div>
  );
};

export default ThankYou;
