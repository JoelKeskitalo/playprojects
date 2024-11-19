import "./Header.css"
import { Link } from "react-router-dom"

const Header = ({ setActiveComponent }) => {
  return (
    <header className="header-container">
      <nav>
        <button
          className="header-link"
          onClick={() => setActiveComponent("home")}
        >
          <Link to="/portal" className="header-link">
            Hem
          </Link>
        </button>
        <button
          className="header-link"
          onClick={() => setActiveComponent("menu")}
        >
          Vårt snus
        </button>
        <button
          className="header-link"
          onClick={() => setActiveComponent("account")}
        >
          Profil
        </button>
        <button
          className="header-link"
          onClick={() => setActiveComponent("orders")}
        >
          Beställningar
        </button>
        <button className="header-link">
          <Link to="/" className="header-link">
            Logga ut
          </Link>
        </button>
      </nav>
    </header>
  )
}

export default Header
