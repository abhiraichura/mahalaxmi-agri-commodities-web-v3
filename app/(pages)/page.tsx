import { HeroSection } from '@/app/components/sections/HeroSection';
import { RegionMarquee } from '@/app/components/sections/RegionMarquee';
import { ProblemSection } from '@/app/components/sections/ProblemSection';
import { BridgeSection } from '@/app/components/sections/BridgeSection';
import { CommoditiesSection } from '@/app/components/sections/CommoditiesSection';
import { StatsSection } from '@/app/components/sections/StatsSection';
import { TestimonialsSection } from '@/app/components/sections/TestimonialsSection';
import { AboutSection } from '@/app/components/sections/AboutSection';
import { CTASection } from '@/app/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RegionMarquee />
      <ProblemSection />
      <BridgeSection />
      <CommoditiesSection />
      <StatsSection />
      <TestimonialsSection />
      <AboutSection />
      <CTASection />
    </>
  );
}
