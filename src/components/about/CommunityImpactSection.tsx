
const CommunityImpactSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-300 via-gray-100 to-white text-gray-800 relative overflow-hidden fade-in-up">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-yellow-200/10 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-gray-200 shadow-2xl animate-fade-in">
            <div className="text-6xl mb-6 animate-bounce">🎓</div>
            <h2 className="text-3xl font-bold mb-6 font-montserrat text-gray-900">Making a Difference - Sofia & Ruben's Promise</h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              True to <strong>Sofia and Ruben's</strong> commitment to community, we're proud to donate 3% 
              of our profits to help schools across the UK access essential sports kits, uniforms, and safety 
              education tools. Because building safer communities starts with empowering our children - 
              a principle that Sofia and Ruben hold dear.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2 text-gray-700">3%</div>
                <div className="text-sm opacity-90">Profits Donated</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">🏫</div>
                <div className="text-sm opacity-90">Schools Supported</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">🎯</div>
                <div className="text-sm opacity-90">Safety First</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpactSection;

