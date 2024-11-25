import "./Header.css"
import { Link } from "react-router-dom"

const Header = ({ setActiveComponent }) => {
  return (
    <header className="header-container">
      <nav>
        <button onClick={() => setActiveComponent("home")}>
          <Link to="/portal" className="header-link">
            Hem
          </Link>
        </button>
        <button onClick={() => setActiveComponent("menu")}>Vårt snus</button>
        <button onClick={() => setActiveComponent("account")}>Profil</button>
        <button onClick={() => setActiveComponent("orders")}>
          Beställningar
        </button>
        <button className="logout-button">
          <Link to="/">Logga ut</Link>
        </button>
      </nav>
    </header>
  )
}

export default Header
