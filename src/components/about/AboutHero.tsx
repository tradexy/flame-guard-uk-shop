
import { Flame, Shield, Truck } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="bg-white relative overflow-hidden fade-in-up">
      <div className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-montserrat animate-fade-in">
            About Little <span className="font-semibold">Fire Heroes</span>
          </h1>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed animate-fade-in">
            Founded by <strong>Sofia and Ruben</strong>, we're on a mission to make fire safety accessible, 
            understandable, and effective for everyone. From innovative products to community education, 
            we believe everyone can be a fire hero.
          </p>
          <p className="text-md text-gray-500 mb-8 animate-fade-in">
            <em>Inspired by Sofia and Ruben's vision for safer communities</em>
          </p>
          <div className="flex justify-center space-x-8 text-gray-600 mt-8">
            <Truck size={48} strokeWidth={1.5} />
            <Flame size={48} strokeWidth={1.5} />
            <Shield size={48} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
