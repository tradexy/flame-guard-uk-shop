
import { Button } from '@/components/ui/button';

const AboutHero = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-100 to-red-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Little Fire Heroes
          </h1>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            Founded by <strong>Sofia and Ruben</strong>, we're on a mission to make fire safety accessible, 
            understandable, and effective for everyone. From innovative products to community education, 
            we believe everyone can be a fire hero.
          </p>
          <p className="text-md text-gray-500 mb-8">
            <em>Inspired by Sofia and Ruben's vision for safer communities</em>
          </p>
          <div className="flex justify-center space-x-4 text-6xl">
            <span>🚒</span>
            <span>👨‍🚒</span>
            <span>🔥</span>
            <span>🛡️</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
