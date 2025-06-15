
import { Flame, Shield, Truck } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-100 via-yellow-50 to-red-100 relative overflow-hidden fade-in-up">
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300/20 via-pink-200/20 to-orange-400/10 animate-pulse"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-montserrat drop-shadow-lg animate-fade-in">
            About Little <span className="text-red-600">Fire Heroes</span>
          </h1>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed animate-fade-in">
            Founded by <strong>Sofia and Ruben</strong>, we're on a mission to make fire safety accessible, 
            understandable, and effective for everyone. From innovative products to community education, 
            we believe everyone can be a fire hero.
          </p>
          <p className="text-md text-gray-500 mb-8 animate-fade-in">
            <em>Inspired by Sofia and Ruben's vision for safer communities</em>
          </p>
          <div className="flex justify-center space-x-8 text-primary mt-8">
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
