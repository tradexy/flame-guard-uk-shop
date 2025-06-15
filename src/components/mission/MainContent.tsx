
import FireSafetyEducation from './FireSafetyEducation';
import CommunityImpact from './CommunityImpact';
import InnovationSection from './InnovationSection';

const MainContent = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        <FireSafetyEducation />
        <CommunityImpact />
        <InnovationSection />
      </div>
    </div>
  </section>
);

export default MainContent;
