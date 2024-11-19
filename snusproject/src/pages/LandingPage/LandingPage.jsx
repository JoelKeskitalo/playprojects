import "./LandingPage.css"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Välkommen till Snus-shoppen!</h1>
      <div className="landing-buttons">
        <button className="landing-button">
          <Link to="/login">Logga in</Link>
        </button>
        <Link to="/register">
          <button className="landing-button">Registrera dig</button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
