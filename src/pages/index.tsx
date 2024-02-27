import Seo from '@/components/seo';
import Hero from '@/modules/homepage/hero';

export default function Home() {
  return (
    <>
      <Seo
        title="Mechadoc"
        description="AI Copilot for mech teams."
      />
      <Hero />
    </>
  );
}
