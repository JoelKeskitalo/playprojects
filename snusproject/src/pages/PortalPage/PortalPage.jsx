import { useState } from "react"
import "./PortalPage.css"
import Header from "../../components/Header/Header"
import MenuComponent from "../../components/MenuComponent/MenuComponent"
import AccountComponent from "../../components/AccountComponent/AccountComponent"
import OrdersComponent from "../../components/OrdersComponent/OrdersComponent"
import PortalHomeComponent from "./PortalHomeComponent"

const PortalPage = () => {
  const [activeComponent, setActiveComponent] = useState("menu")

  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <PortalHomeComponent />
      case "menu":
        return <MenuComponent />
      case "account":
        return <AccountComponent />
      case "orders":
        return <OrdersComponent />
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
