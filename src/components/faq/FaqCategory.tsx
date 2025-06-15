
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

interface Question {
  question: string;
  answer: string;
}

interface FaqCategoryProps {
  category: {
    title: string;
    badge: string;
    questions: Question[];
  };
  categoryIndex: number;
}

const FaqCategory = ({ category, categoryIndex }: FaqCategoryProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-lg border border-white/10 overflow-hidden">
      <div className="bg-black/10 p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-white">{category.title}</h2>
          <Badge variant="secondary" className="bg-white/10 border border-white/20 text-gray-200 backdrop-blur-md">
            {category.badge}
          </Badge>
        </div>
      </div>
      <div className="p-6">
        <Accordion type="single" collapsible className="space-y-4">
          {category.questions.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`${categoryIndex}-${index}`}
              className="border border-white/10 rounded-lg px-4 hover:border-white/20 transition-colors bg-black/10"
            >
              <AccordionTrigger className="text-left hover:text-white font-medium text-gray-200">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqCategory;
