
const WhyChooseUs = () => {
  const reasons = [
    {
      color: "red",
      number: 1,
      title: "Expert Knowledge",
      desc: "Our team has years of experience in fire safety and can provide expert advice tailored to your needs.",
      bg: "bg-red-100",
      text: "text-red-600"
    },
    {
      color: "blue",
      number: 2,
      title: "Quality Products",
      desc: "We provide high-quality, innovative fire safety products that are reliable and effective.",
      bg: "bg-blue-100",
      text: "text-blue-600"
    },
    {
      color: "green",
      number: 3,
      title: "Excellent Support",
      desc: "We're committed to providing exceptional customer service and ongoing support for all our products.",
      bg: "bg-green-100",
      text: "text-green-600"
    },
    {
      color: "orange",
      number: 4,
      title: "Competitive Pricing",
      desc: "Our products offer excellent value for money, helping you save costs while maintaining safety standards.",
      bg: "bg-orange-100",
      text: "text-orange-600"
    },
  ];
  return (
    <div className="lg:w-1/2 animate-fade-in animate-delay-200">
      <div className="bg-white/85 hover:shadow-2xl transition-shadow rounded-2xl p-8 shadow-xl border border-orange-200/60 h-full">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">
          Why Choose <span className="text-red-600">Little Fire Heroes?</span>
        </h3>
        <div className="space-y-6">
          {reasons.map((r, i) => (
            <div
              key={r.number}
              className={`flex items-start space-x-4 animate-fade-in animate-delay-${100 + (i+1)*70}`}
            >
              <div className={`${r.bg} rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg border-2 border-white`}>
                <span className={`${r.text} font-bold text-lg`}>{r.number}</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{r.title}</h4>
                <p className="text-gray-700">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
