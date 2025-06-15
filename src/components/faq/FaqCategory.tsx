
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
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gray-50 p-6 border-b">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
          <Badge variant="secondary">
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
              className="border border-gray-200 rounded-lg px-4 hover:border-gray-300 transition-colors"
            >
              <AccordionTrigger className="text-left hover:text-gray-900 font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pt-2">
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
