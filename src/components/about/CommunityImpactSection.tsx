
const CommunityImpactSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="text-6xl mb-6">🎓</div>
            <h2 className="text-3xl font-bold mb-6">Making a Difference - Sofia & Ruben's Promise</h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              True to <strong>Sofia and Ruben's</strong> commitment to community, we're proud to donate 3% 
              of our profits to help schools across the UK access essential sports kits, uniforms, and safety 
              education tools. Because building safer communities starts with empowering our children - 
              a principle that Sofia and Ruben hold dear.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">3%</div>
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
