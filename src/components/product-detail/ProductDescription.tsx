
interface ProductDescriptionProps {
  description: string;
}

const ProductDescription = ({ description }: ProductDescriptionProps) => (
  <div>
    <h3 className="mb-2">Description</h3>
    <p>{description}</p>
  </div>
);

export default ProductDescription;
