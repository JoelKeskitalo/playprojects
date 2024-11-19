import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "../pages/LandingPage/LandingPage"
import PortalPage from "../pages/PortalPage/PortalPage"
import MenuComponent from "../components/MenuComponent/MenuComponent"
import AccountComponent from "../components/AccountComponent/AccountComponent"
import OrdersComponent from "../components/OrdersComponent/OrdersComponent"
import Login from "../components/Login/Login"
import RegisterPage from "../pages/RegisterPage/RegisterPage"

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portal" element={<PortalPage />} />
        <Route path="/menu" element={<MenuComponent />} />
        <Route path="/account" element={<AccountComponent />} />
        <Route path="/orders" element={<OrdersComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
