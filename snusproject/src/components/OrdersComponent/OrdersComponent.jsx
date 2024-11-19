import "./OrdersComponent.css"

const OrdersComponent = () => {
  return (
    <div className="orders-container">
      <h1 className="orders-header">Dina Beställningar</h1>
      <div className="order-item">Order #12345 - Snus Produkt 1</div>
      <div className="order-item">Order #12346 - Snus Produkt 2</div>
      <div className="order-item">Order #12347 - Snus Produkt 3</div>
    </div>
  )
}

export default OrdersComponent
