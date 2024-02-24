import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import Logo from '@/assets/logo.svg';
import Logo from '@/assets/robodoc_logo.png';

import { urls } from '@/helpers/urls';

import styles from './footer.module.scss';
const footer = () => {
  return (
    <div className={`container ${styles.outer}`}>
      <div className={styles.column}>
        <Link href={urls.home}>
          <Image src={Logo} alt="Inferex logo" />
        </Link>
        <p className={styles.body}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          blanditiis nemo necessitatibus voluptatem laborum repellendus facilis
          aut ut neque tempora officia, adipisci quas! Vitae quia nihil
          veritatis neque dolores ut.
        </p>
      </div>
      <div className={styles.column}>
        <h3 className={styles.title}>Developers</h3>
        <ul>
          <li>
            <a
              className={styles.link}
              href={urls.external.documentation.index}
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href={urls.external.documentation.gettingStarted}
              target="_blank"
              rel="noreferrer"
            >
              Get started
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href={urls.external.documentation.cli}
              target="_blank"
              rel="noreferrer"
            >
              CLI
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3 className={styles.title}>Resources</h3>
        <ul>
          <li>
            <Link className={styles.link} href={urls.blog}>
              Blog
            </Link>
          </li>
          <li>
            <a className={styles.link} href="#">
              Customer stories
            </a>
          </li>
          <li>
            <a className={styles.link} href="#">
              Press
            </a>
          </li>
          <li>
            <a className={styles.link} href="#">
              Support
            </a>
          </li>
          <li>
            <a className={styles.link} href="#">
              Careers
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3 className={styles.title}>Example 3</h3>
        <ul>
          <li>
            <a className={styles.link} href="#">
              Link Long name1
            </a>
          </li>
          <li>
            <a className={styles.link} href="#">
              Link Long name2
            </a>
          </li>
          <li>
            <a className={styles.link} href="#">
              Link Long name3
            </a>
          </li>
          <li>
            <a className={styles.link} href="#">
              Link Long name4
            </a>
          </li>
          <li>
            <a className={styles.link} href="#">
              Link Long name5
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3 className={styles.title}>Contact us</h3>
        <p className={styles.address}>
          123123 Ireland <br /> 123123 21/37
        </p>
        <p className={styles.address}>hello@hello.com</p>
        <p className={styles.address}>IE123123123</p>
      </div>
    </div>
  );
};

export default footer;
