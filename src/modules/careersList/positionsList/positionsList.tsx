import React from 'react';
import Link from 'next/link';

import SubTitle from '@/components/ant/subTitle';

import Chevron from '@/assets/icons/chevron.svg';

import type { IJobs } from '@/types/jobs';
import { urls } from '@/helpers/urls';
import styles from './positionsList.module.scss';

interface IPositionsListProps {
  subTitleText?: string;
  data: IJobs[];
}

const PositionsList = ({
  subTitleText = 'Begin your career with us!',
  data,
}: IPositionsListProps) => {
  return (
    <div className={`container ${styles.outer}`}>
      <SubTitle text={subTitleText} />
      <h2 className={styles.title}>Open positions</h2>
      <div className={styles.inner}>
        {data.map((position: IJobs, index: number) => {
          const { workload, name, location, url } = position;
          return (
            <article
              key={name}
              className={styles.item}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Link href={`${urls.careers.positions}/${url}`}>
                <div>
                  <div className={styles.itemTexts}>
                    <p className={styles.itemTitle}>{name}</p>
                  </div>
                  <p className={styles.itemLocation}>{location}</p>
                  <p className={styles.itemType}>
                    {workload.split('_').join(' ')}
                  </p>
                </div>
                <p className={styles.itemDetails}>
                  See details{' '}
                  <img src={Chevron.src} alt="" role="presentation" />
                </p>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default PositionsList;
