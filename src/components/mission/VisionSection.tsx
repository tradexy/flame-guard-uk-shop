
const VisionSection = () => (
  <section className="py-16 bg-gray-50 text-gray-900">
    <div className="container mx-auto px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">
          Our Vision for the Future
        </h2>
        <p className="text-xl mb-8 text-gray-700">
          We envision a world where every child is a fire safety hero, every home is protected, and every community has access to life-saving education and equipment.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="font-bold text-xl mb-2">Education First</h3>
            <p className="text-gray-700">Making fire safety education engaging and accessible for all ages</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="font-bold text-xl mb-2">Global Impact</h3>
            <p className="text-gray-700">Expanding our reach to protect communities worldwide</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="font-bold text-xl mb-2">Innovation</h3>
            <p className="text-gray-700">Continuously developing better, safer, and more sustainable solutions</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VisionSection;
