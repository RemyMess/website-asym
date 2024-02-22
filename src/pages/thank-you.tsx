import Seo from '@/components/seo';
import ThankYou from '@/modules/waitlist/thankyou';
import React from 'react';

const ThanksPage = () => {
  return (
    <>
      <Seo
        title="Thank you for signing in!"
        description="Thank you for signing in!"
      />
      <ThankYou />
    </>
  );
};

export default ThanksPage;
