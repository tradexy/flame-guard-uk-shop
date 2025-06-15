
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
      <h3 className="text-lg font-semibold mb-2 text-foreground">Features</h3>
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
