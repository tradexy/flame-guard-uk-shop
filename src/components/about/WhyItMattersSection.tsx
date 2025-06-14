
const WhyItMattersSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            {/* Why It Matters Image - Square */}
            <div className="relative bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl overflow-hidden shadow-2xl border border-white/50 w-80 h-80">
              <img 
                src="/lovable-uploads/4d4752d2-ef63-47c2-a268-81554a68db6f.png" 
                alt="Fire safety in action - Why it matters"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold text-lg">Making Fire Safety Matter</p>
                <p className="text-sm opacity-90">Sofia & Ruben's impact on community safety</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Little Fire Heroes - Why It Matters</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Every day, families, teachers, and business owners face risks they're not equipped to handle.
              </p>
              <p>
                From missing alarms to expired extinguishers, the gaps in safety are real — and often unnoticed.
              </p>
              <p>
                We created this e-shop not just to sell fire safe products — but to inspire a culture of alertness and preparedness.
              </p>
              <p>
                Our tools and products come with learning, confidence, and support built in, they are unique in many ways and ground breaking, in the case of our extinguishers, they are a great product because they are unique in what they are capable of doing but they also have the potential of saving life and their ease of use means that they can be applied to almost every type of fire, the money saving aspect for a school, or business large or small is another important reason why our products are the right ones for you, not to mention the fact that as we get bigger we promise to make our charitable contributions bigger and bigger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMattersSection;
