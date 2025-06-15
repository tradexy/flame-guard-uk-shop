
import { Card, CardContent } from "@/components/ui/card";

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
      <Card className="h-full">
        <CardContent className="p-8">
          <h3 className="mb-6">
            Why Choose <span className="text-primary">Little Fire Heroes?</span>
          </h3>
          <div className="space-y-6">
            {reasons.map((r, i) => (
              <div
                key={r.number}
                className={`flex items-start space-x-4 animate-fade-in`}
                style={{ animationDelay: `${100 + i * 100}ms` }}
              >
                <div className={`bg-secondary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1 shadow-md`}>
                  <span className={`text-secondary-foreground font-bold text-lg`}>{r.number}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{r.title}</h4>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhyChooseUs;
