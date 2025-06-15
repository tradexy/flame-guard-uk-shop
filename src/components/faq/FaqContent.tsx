
import { faqCategories } from '@/data/faqData';
import FaqExpertCard from './FaqExpertCard';
import FaqCategory from './FaqCategory';

const FaqContent = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* First Section - General Questions with Expert */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-3">
              <FaqExpertCard 
                name="Ruben"
                title="Fire Safety Expert"
                badgeText="Expert"
                imageSrc="/lovable-uploads/d91b57ba-fd4d-4279-996d-318c136c54af.png"
                altText="Ruben - Fire Safety Expert"
              />
            </div>
            <div className="md:col-span-9">
              <FaqCategory category={faqCategories[0]} categoryIndex={0} />
            </div>
          </div>

          {/* Second Section - Orders without image */}
          <FaqCategory category={faqCategories[1]} categoryIndex={1} />

          {/* Third Section - Products with Community */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-9">
               <FaqCategory category={faqCategories[2]} categoryIndex={2} />
            </div>
            <div className="md:col-span-3">
              <FaqExpertCard
                name="Sofia"
                title="Community Expert"
                badgeText="Community"
                imageSrc="/lovable-uploads/8c298eac-ace5-4c14-99a7-683522bb0ac3.png"
                altText="Sofia - Community Expert"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqContent;
