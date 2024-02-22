import SubTitle from '@/components/ant/subTitle';
import React from 'react';
import GregImage from '@/assets/images/careers/greg.png';
import BackgroundImage from '@/assets/images/ornament.svg';
import type { ITeam } from '@/types/team';
import SinglePerson from './singlePerson';

import styles from './team.module.scss';

const Team = ({ data }: { data: ITeam[] }) => {
  return (
    <div className={styles.outer}>
      <img
        className={`basicBackgroundImage ${styles.backgroundImage}`}
        src={BackgroundImage.src}
        alt=""
        role="presentation"
      />
      <div className={`container`}>
        <div className={styles.introWrap}>
          <div className={styles.introInner}>
            <SubTitle text="Vision" />
            <h2 className={styles.title}>Meet our team</h2>
            <p className={styles.body}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates error magnam delectus, hic mollitia qui iure accusamus
              odit iste voluptatum nobis deserunt officiis, dolores reiciendis
              fugit, atque impedit ad! Quibusdam?
            </p>
          </div>
          <SinglePerson
            name="Greg"
            position="CEO"
            isStatic={true}
            photo={{
              url: GregImage.src,
              width: GregImage.width,
              height: GregImage.height,
            }}
          />
        </div>
        <div>
          <h2 className={styles.title} style={{ textAlign: 'center' }}>
            Our team
          </h2>
          <div className={styles.teamWrap}>
            {data.map((person, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={person.name}
              >
                <SinglePerson {...person} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
