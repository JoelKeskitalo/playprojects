import "./ProductComponent.css"

const ProductComponent = ({ product, addOrder }) => {
  return (
    <div className="product-container">
      <h1 className="product-title">{product.name}</h1>
      <div className="product-details">
        <p><strong>Smak:</strong> {product.flavor}</p>
        <p><strong>Styrka:</strong> {product.strength}</p>
        <p><strong>Pris:</strong> {product.price} kr</p>
      </div>
      <button onClick={() => addOrder(product)}>Beställ</button>
    </div>
  )
}

export default ProductComponent;
