
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactMap = () => {
  return (
    <section className="mb-16 animate-fade-in">
      <Card>
        <CardContent className="p-8">
          <h2 className="text-center mb-6">Find <span className="text-primary">Us</span></h2>
          <div className="bg-secondary rounded-xl h-96 flex items-center justify-center overflow-hidden mb-2 border border-input shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.123456789!2d-0.9876543210987654!3d51.76543210987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDQ1JzU1LjYiTiAwwrA1OSczOC4yIlc!5e0!3m2!1sen!2suk!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
              title="Little Fire Heroes Location"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <p>
              <strong>Address:</strong> Little Heroes Unit 5 Ridge Way, Crendon Industrial Park, Long Crendon, Buckinghamshire HP18 9BF
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactMap;
