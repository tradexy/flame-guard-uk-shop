const WhyChooseUs = () => {
  const reasons = [
    {
      number: 1,
      title: "Expert Knowledge",
      desc: "Our team has years of experience in fire safety and can provide expert advice tailored to your needs.",
    },
    {
      number: 2,
      title: "Quality Products",
      desc: "We provide high-quality, innovative fire safety products that are reliable and effective.",
    },
    {
      number: 3,
      title: "Excellent Support",
      desc: "We're committed to providing exceptional customer service and ongoing support for all our products.",
    },
    {
      number: 4,
      title: "Competitive Pricing",
      desc: "Our products offer excellent value for money, helping you save costs while maintaining safety standards.",
    },
  ];
  return (
    <div className="lg:w-1/2 animate-fade-in animate-delay-200">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-subtle border border-white/50 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">
          Why Choose <span className="text-primary">Little Fire Heroes?</span>
        </h3>
        <div className="space-y-6">
          {reasons.map((r, i) => (
            <div
              key={r.number}
              className={`flex items-start space-x-4 animate-fade-in`}
              style={{ animationDelay: `${100 + i * 100}ms` }}
            >
              <div className={`bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1 shadow-md border-2 border-white`}>
                <span className={`text-primary font-bold text-lg`}>{r.number}</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{r.title}</h4>
                <p className="text-gray-600 text-sm">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
