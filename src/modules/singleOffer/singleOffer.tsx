/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import CareersCta from '@/components/careersCta';
import BackgroundImage from '@/assets/images/ornament.svg';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';
import PositionsList from '@/modules/careersList/positionsList';

import LinkIcon from '@/assets/icons/link.svg';
import Button from '@/components/ant/button/button';
import type { IJobs } from '@/types/jobs';
import styles from './singleOffer.module.scss';

interface ISingleOfferProps {
  singleData: IJobs;
  allData: IJobs[];
}

const SingleOffer = ({ singleData, allData }: ISingleOfferProps) => {
  const { description, name, location, salary, workload, form_url, url } =
    singleData;
  const { copiedText, copy, cleanup } = useCopyToClipboard();

  const base = 'https://inferex.com';
  const positionUrlForm = form_url;
  const positionUrl = `${base}/careers/positions/${url}`;

  useEffect(() => {
    if (copiedText) {
      setTimeout(() => {
        cleanup();
      }, 1000);
    }
  }, [copiedText]);

  const workloadText = workload.split('_').join('-');

  return (
    <>
      <div className={styles.outer}>
        <img
          className={`basicBackgroundImage ${styles.backgroundImage}`}
          src={BackgroundImage.src}
          alt=""
          role="presentation"
        />
        <div className={`container ${styles.wrapper}`}>
          <h1 className={styles.title}>{name}</h1>
          <div className={styles.buttonsWrap}>
            <div className={styles.button}>
              <span>{location}</span>
            </div>
            <div className={styles.button}>
              <span>{workloadText}</span>
            </div>
            <div className={styles.button}>
              <span>{salary}</span>
            </div>
          </div>
          <div className={styles.inner}>
            <section className={styles.bodyWrap}>
              <ReactMarkdown
                components={{
                  img: ({ alt, src }) => {
                    return (
                      <img
                        src={`${process.env.NEXT_PUBLIC_CMS_URL}${src}`}
                        alt={alt}
                      />
                    );
                  },
                }}
              >
                {description}
              </ReactMarkdown>
            </section>
            <aside className={styles.aside}>
              <div className={styles.asideInner}>
                <p className={styles.asideText}>Apply for this offer</p>
                <Button href={{ pathname: positionUrlForm, isInternal: false }}>
                  <span>Apply</span>
                </Button>
                <button
                  className={styles.copyButton}
                  onClick={() => copy(positionUrl)}
                >
                  <span>Copy link</span>
                  <img src={LinkIcon.src} alt="" role="presentation" />
                </button>
              </div>
              <div
                style={{ opacity: copiedText ? 1 : 0 }}
                className={styles.copyDiv}
              >
                Copied!
              </div>
            </aside>
          </div>
        </div>
        <div className={styles.ctaOuter}>
          <CareersCta
            buttonText="Apply"
            href={{ pathname: positionUrlForm, isInternal: false }}
          />
        </div>
        <div className={styles.positionsListOuter}>
          <PositionsList subTitleText="More offers" data={allData} />
        </div>
      </div>
    </>
  );
};

export default SingleOffer;
