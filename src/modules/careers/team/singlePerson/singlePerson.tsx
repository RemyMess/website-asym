import type { ITeam } from '@/types/team';
import Image from 'next/image';
import React from 'react';

import styles from './singlePerson.module.scss';

interface IStaticPerson {
  name: string;
  position: string;
  isStatic: true;
  photo: {
    url: string;
    width: number;
    height: number;
  };
}

const SinglePerson = (data: ITeam | IStaticPerson) => {
  const { name, position, photo, isStatic = false } = data;
  return (
    <div className={styles.outer}>
      {!isStatic && (
        <Image
          src={`${process.env.NEXT_PUBLIC_CMS_URL}${photo.url}`}
          alt={`${name}, ${position}`}
          width={photo.width}
          height={photo.height}
        />
      )}
      {isStatic && (
        <Image
          src={photo.url}
          alt={`${name}, ${position}`}
          width={photo.width}
          height={photo.height}
        />
      )}
      <div className={styles.textWrap}>
        <h3 className={styles.name}>{name}</h3>
        <h4 className={styles.title}>{position}</h4>
      </div>
    </div>
  );
};

export default SinglePerson;
