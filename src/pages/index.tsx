import Seo from '@/components/seo';
import Hero from '@/modules/homepage/hero';

export default function Home() {
  return (
    <>
      <Seo
        title="RobotDoc"
        description="AI knowledge Hub for mechanical teams."
      />
      <Hero />
    </>
  );
}
