import React from 'react';
import Image from 'next/image';

import type { ITestimonial } from '@/types/testimonials';
import styles from './testimonials.module.scss';

const Testimonials = ({ data }: { data: ITestimonial[] }) => {
  return (
    <div className={`${styles.outer}`}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>They talk about us!</h2>
        <h3 className={styles.subTitle}>See what our clients say about us:</h3>
        <div className={styles.testimonialWrapper}>
          <div className={styles.testimonialInner}>
            {data.map((testimonial) => {
              return (
                <article className={styles.testimonial} key={testimonial.name}>
                  {testimonial.companyLogo.url && (
                    <Image
                      className={styles.testimonialLogo}
                      src={`${process.env.NEXT_PUBLIC_CMS_URL}${testimonial.companyLogo.url}`}
                      alt={testimonial.name}
                      width="150"
                      height="80"
                    />
                  )}
                  <h4 className={styles.testimonialName}>{testimonial.name}</h4>
                  <h5 className={styles.testimonialTitle}>
                    {testimonial.position}
                  </h5>
                  <p className={styles.testimonialBody}>
                    {testimonial.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
