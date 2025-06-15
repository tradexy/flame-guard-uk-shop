
interface ProductDescriptionProps {
  description: string;
}

const ProductDescription = ({ description }: ProductDescriptionProps) => (
  <div>
    <h3 className="text-lg font-semibold mb-2 text-foreground">Description</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

export default ProductDescription;
