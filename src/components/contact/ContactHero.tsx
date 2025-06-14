
const ContactHero = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-100 via-yellow-50 to-red-100 relative fade-in-up overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-orange-200/15 via-red-100/10 to-yellow-200/20 animate-pulse" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 drop-shadow-lg font-montserrat animate-fade-in">
          Contact <span className="text-red-600">Us</span>
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in opacity-90 font-montserrat mb-2">
          Get in touch with our team for expert fire safety advice and support
        </p>
        <div className="flex justify-center mt-6 animate-scale-in">
          <span className="text-5xl md:text-6xl animate-bounce">📞</span>
          <span className="text-5xl md:text-6xl animate-bounce delay-100 ml-4">📧</span>
          <span className="text-5xl md:text-6xl animate-bounce delay-200 ml-4">🚒</span>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
