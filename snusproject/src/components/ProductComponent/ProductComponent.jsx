import "./ProductComponent.css"

const ProductComponent = ({ product }) => {
  return (
    <div className="product-container">
      <h1 className="product-title">{product.name}</h1>
      <div className="product-details">
        <p><strong>Smak:</strong> {product.flavor}</p>
        <p><strong>Styrka:</strong> {product.strength}</p>
        <p><strong>Pris:</strong> {product.price} kr</p>
      </div>
    </div>
  );
};

export default ProductComponent;
