
const OurStorySection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50 fade-in-up">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-montserrat animate-fade-in">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed animate-fade-in">
              <p>
                Little Fire Heroes was born from <strong>Sofia and Ruben's</strong> simple belief: 
                fire safety shouldn't be complicated, expensive, or intimidating. Together, they started 
                with a vision to create products and education that empower individuals, families, 
                and communities to protect themselves.
              </p>
              <p>
                <strong>Sofia and Ruben's</strong> journey began with recognizing that traditional fire 
                safety solutions often fell short of meeting real-world needs. They set out to change 
                that by developing innovative, accessible products that anyone can use effectively.
              </p>
              <p>
                Today, thanks to <strong>Sofia and Ruben's</strong> leadership, we're proud to serve homes, 
                boats, caravans, schools, factories, and offices across the UK, making fire safety a 
                priority that's both achievable and affordable.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl overflow-hidden shadow-2xl border border-white/50 w-80 h-80 animate-fade-in">
              <img 
                src="/lovable-uploads/622fe07f-7ce1-44de-9deb-04e04590a732.png" 
                alt="Sofia & Ruben - Co-Founders of Little Fire Heroes"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold text-lg">Sofia & Ruben</p>
                <p className="text-sm opacity-90">Co-Founders of Little Fire Heroes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
