import Seo from '@/components/seo';
import Hero from '@/modules/homepage/hero';

export default function Home() {
  return (
    <>
      <Seo
        title="Asymmetric Text"
        description="Central intelligent source of truth for mechanical systems."
      />
      <Hero />
    </>
  );
}
