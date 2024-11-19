import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "../pages/LandingPage/LandingPage"
import PortalPage from "../pages/PortalPage/PortalPage"
import MenuComponent from "../components/MenuComponent/MenuComponent"
import AccountComponent from "../components/AccountComponent/AccountComponent"
import OrdersComponent from "../components/OrdersComponent/OrdersComponent"

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portal" element={<PortalPage />} />
        <Route path="/menu" element={<MenuComponent />} />
        <Route path="/account" element={<AccountComponent />} />
        <Route path="/orders" element={<OrdersComponent />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
