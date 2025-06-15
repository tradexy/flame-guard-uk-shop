
import { Badge } from '@/components/ui/badge';

interface ProductFeaturesProps {
  tags: string[];
}

const ProductFeatures = ({ tags }: ProductFeaturesProps) => {
  if (tags.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="mb-2">Features</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ProductFeatures;
