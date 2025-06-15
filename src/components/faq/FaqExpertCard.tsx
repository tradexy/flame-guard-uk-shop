
import { Badge } from '@/components/ui/badge';

interface FaqExpertCardProps {
  name: string;
  title: string;
  badgeText: string;
  imageSrc: string;
  altText: string;
}

const FaqExpertCard = ({ name, title, badgeText, imageSrc, altText }: FaqExpertCardProps) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6 text-center shadow-lg border border-gray-200">
      <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
        <img 
          src={imageSrc} 
          alt={altText}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="font-bold text-gray-800 text-lg mb-2">{name}</h3>
      <p className="text-gray-700 text-sm mb-3">{title}</p>
      <Badge variant="secondary">
        {badgeText}
      </Badge>
    </div>
  );
};

export default FaqExpertCard;
