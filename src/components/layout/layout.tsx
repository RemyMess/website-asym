import AOS from 'aos';
import React, { useEffect } from 'react';

import Navigation from '@/components/navigation';
import styles from './layout.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        duration: 500,
        disable() {
          const maxWidth = 630;
          return window.innerWidth < maxWidth;
        },
      });
    }, 500);
    return () => AOS.refresh();
  }, []);

  return (
    <>
      <Navigation />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
