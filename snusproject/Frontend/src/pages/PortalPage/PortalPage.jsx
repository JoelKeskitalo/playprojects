import { useState, useEffect } from "react"
import "./PortalPage.css"
import Header from "../../components/Header/Header"
import MenuComponent from "../../components/MenuComponent/MenuComponent"
import AccountComponent from "../../components/AccountComponent/AccountComponent"
import OrdersComponent from "../../components/OrdersComponent/OrdersComponent"
import PortalHomeComponent from "./PortalHomeComponent"
import ProductComponent from "../../components/ProductComponent/ProductComponent"

const PortalPage = () => {

  const [activeComponent, setActiveComponent] = useState("home")
  const [userData, setUserData] = useState({ // send to AccountComponent
    firstName: "",
    lastName: "",
    email: "",
  })
  const [orders, setOrders] = useState([])
  const [selectedSnus, setSelectedSnus] = useState(null)

  const addToOrders = (product) => { // send to ProductComponent
    setOrders([
      ...orders, product
    ])
  } 


  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"))

    if (storedData) {
      setUserData({
        firstName: storedData.firstName,
        lastName: storedData.lastName,
        email: storedData.email,
      })
    }
  }, [])

  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <PortalHomeComponent />
      case "menu":
        return <MenuComponent 
        setSelectedSnus={setSelectedSnus} 
        setActiveComponent={setActiveComponent} 
        />
      case "account":
        return <AccountComponent userData={userData} />
      case "orders":
        return <OrdersComponent orders={orders} setOrders={setOrders}/>
      case "products":
        return <ProductComponent  
        addOrder={addToOrders} 
        product={selectedSnus} 
        />
      default:
        return null
    }
  }

  return (
    <div className="portal-container">
      <Header setActiveComponent={setActiveComponent} />
      <main>{renderComponent()}</main>
    </div>
  )
}

export default PortalPage
