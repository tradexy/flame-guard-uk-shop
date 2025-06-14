
const WhyChooseUs = () => {
  return (
    <div className="lg:w-1/2">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 h-full">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Little Fire Heroes?</h3>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-red-600 font-bold">1</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Knowledge</h4>
              <p className="text-gray-600">Our team has years of experience in fire safety and can provide expert advice tailored to your needs.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-blue-600 font-bold">2</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Quality Products</h4>
              <p className="text-gray-600">We provide high-quality, innovative fire safety products that are reliable and effective.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-green-600 font-bold">3</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Excellent Support</h4>
              <p className="text-gray-600">We're committed to providing exceptional customer service and ongoing support for all our products.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-orange-600 font-bold">4</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Competitive Pricing</h4>
              <p className="text-gray-600">Our products offer excellent value for money, helping you save costs while maintaining safety standards.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
