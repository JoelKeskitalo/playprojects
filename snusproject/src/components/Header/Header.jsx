import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header-container">
      <nav>
        <Link to="/portal" className="header-link">
          Hem
        </Link>
        <Link to="/menu" className="header-link">
          Vårt snus
        </Link>
        <Link to="/account" className="header-link">
          Profil
        </Link>
        <Link to="/orders" className="header-link">
          Beställningar
        </Link>
        <Link to="/" className="header-link">
          Logga ut
        </Link>
      </nav>
    </header>
  )
}

export default Header
