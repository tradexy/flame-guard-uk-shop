
const CommunityImpactSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white relative overflow-hidden fade-in-up">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/lovable-uploads/ac2f5bee-fd22-4f72-b2aa-c89edc5674ef.png')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl animate-fade-in">
            <div className="text-6xl mb-6 animate-bounce">🎓</div>
            <h2 className="text-3xl font-bold mb-6 font-montserrat text-white">Making a Difference - Sofia & Ruben's Promise</h2>
            <p className="text-lg mb-8 text-gray-300 leading-relaxed">
              True to <strong>Sofia and Ruben's</strong> commitment to community, we're proud to donate 3% 
              of our profits to help schools across the UK access essential sports kits, uniforms, and safety 
              education tools. Because building safer communities starts with empowering our children - 
              a principle that Sofia and Ruben hold dear.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2 text-primary">3%</div>
                <div className="text-sm text-gray-400">Profits Donated</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">🏫</div>
                <div className="text-sm text-gray-400">Schools Supported</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">🎯</div>
                <div className="text-sm text-gray-400">Safety First</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpactSection;

