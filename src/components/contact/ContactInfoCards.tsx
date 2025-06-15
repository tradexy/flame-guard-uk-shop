
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const cardAnimations = [
  "animate-fade-in animate-delay-100",
  "animate-fade-in animate-delay-200",
  "animate-fade-in animate-delay-300",
  "animate-fade-in animate-delay-400",
];

const ContactInfoCards = () => {
  const cardInfo = [
    { icon: Mail, title: "Email Us", lines: ["info@littlefireheroes.co.uk"] },
    { icon: Phone, title: "Call Us", lines: ["01844 208308"] },
    { icon: MapPin, title: "Visit Us", lines: ["Unit 5 Ridge Way", "Crendon Industrial Park", "Long Crendon, HP18 9BF"] },
    { icon: Clock, title: "Business Hours", lines: ["Mon-Fri: 9:00-17:00", "Sat-Sun: Closed"] }
  ];

  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardInfo.map((info, index) => {
          const Icon = info.icon;
          return (
            <Card key={info.title} className={`group text-center ${cardAnimations[index]} hover:bg-accent transition-colors`}>
              <CardContent className="p-6">
                <div className="bg-secondary group-hover:bg-primary/10 transition-colors duration-300 ease-in-out rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Icon className="h-9 w-9 text-secondary-foreground group-hover:text-primary transition-colors duration-300 ease-in-out" />
                </div>
                <h3 className="mb-2">{info.title}</h3>
                <div className="text-muted-foreground text-sm">
                  {info.lines.map((line, i) => <p key={i} className="m-0 p-0 leading-normal">{line}</p>)}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  );
};

export default ContactInfoCards;
