import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import Logo from '@/assets/logo.svg';
import Logo from '@/assets/asymtext-logo.svg';

import { urls } from '@/helpers/urls';
import styles from './navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={`${styles.inner} containerBig`}>
      <Link href={urls.home} className={styles.logoLink}>
        <Image src={Logo} alt="Inferex logo" priority={true} />
      </Link>
    </nav>
  );
};

export default Navigation;
