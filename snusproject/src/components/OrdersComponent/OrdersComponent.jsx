import "./OrdersComponent.css"

const OrdersComponent = ({ orders }) => {
  return (
    <div className="orders-container">
      <h1 className="orders-header">Dina Beställningar</h1>
      {orders.map((item, index) => (
        <div
          className="order-item"
          key={index}
        >
          <p>{item.name}</p>
          <p>{item.price} kr</p>
        </div>
      ))}
    </div>
  )
}

export default OrdersComponent;
