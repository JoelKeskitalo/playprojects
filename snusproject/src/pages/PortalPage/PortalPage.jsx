import { useState, useEffect } from "react"
import "./PortalPage.css"
import Header from "../../components/Header/Header"
import MenuComponent from "../../components/MenuComponent/MenuComponent"
import AccountComponent from "../../components/AccountComponent/AccountComponent"
import OrdersComponent from "../../components/OrdersComponent/OrdersComponent"
import PortalHomeComponent from "./PortalHomeComponent"

const PortalPage = () => {
  const [activeComponent, setActiveComponent] = useState("home")

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

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
        return <MenuComponent/>
      case "account":
        return <AccountComponent userData={userData} />
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
