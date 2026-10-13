import Hero from '@/components/sections/Hero';
import ExperienceSection from '@/components/sections/ExperienceSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import SpeakingSection from '@/components/sections/SpeakingSection';
import WritingSection from '@/components/sections/WritingSection';
import CommunitySection from '@/components/sections/CommunitySection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import JsonLd from '@/components/seo/JsonLd';
import { profilePageSchema } from '@/lib/structuredData';

const Home = () => (
  <>
    <JsonLd data={profilePageSchema()} />
    <Hero />
    <ExperienceSection />
    <TestimonialsSection />
    <SpeakingSection />
    <WritingSection />
    <CommunitySection />
    <ProjectsSection />
  </>
);

export default Home;
