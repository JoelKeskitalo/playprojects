import "./OrdersComponent.css"

const OrdersComponent = ({ orders, setOrders }) => {

  const removeOrder = (index) => {
    const updatedOrders = orders.filter((element, ordersIndex) => ordersIndex !== index)
    setOrders(updatedOrders)
  }

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
          <button
          name="remove-button"
          onClick={() => removeOrder(index)}
          >
            Ta bort
            </button>
        </div>
      ))}
    </div>
  )
}

export default OrdersComponent;
