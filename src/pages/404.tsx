import Seo from '@/components/seo';

import DeadIcon from '@/assets/icons/dead.svg';

const NotFoundPage = () => {
  const subTitle = {
    fontSize: 'var( --fs-40)',
    fontWeight: 400,
    color: 'var(--c-text-body)',
    margin: '0 0 1rem 0',
  };

  const title = {
    fontSize: 'var( --fs-56)',
    margin: '0 0 1rem 0',
  };

  return (
    <>
      <Seo title="Page not found!" />
      <div style={{ textAlign: 'center' }}>
        <p style={subTitle}>Opps!</p>
        <h1 style={title}>404 Page not found</h1>
        <img src={DeadIcon.src} alt="" role="presentation" />
      </div>
    </>
  );
};

export default NotFoundPage;
