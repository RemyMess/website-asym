import Seo from '@/components/seo';
import Hero from '@/modules/homepage/hero';

export default function Home() {
  return (
    <>
      <Seo
        title="Inferex"
        description="Inferex deploys your models at scale, integrates them seamlessly into your application, and executes your workflows reliably."
      />
      <Hero />
    </>
  );
}
