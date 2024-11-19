import "./RegisterPage.css"
import { Link } from "react-router-dom"

const RegisterPage = () => {
  return (
    <div className="register-container">
      <h1 className="register-title">Registrera dig</h1>
      <form className="register-form">
        <div className="form-group">
          <label htmlFor="firstName">Förnamn</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Efternamn</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Lösenord</label>
          <input type="text" id="password" name="password" required />
        </div>
        <div className="lower-buttons">
          <button type="submit" className="register-button">
            Registrera
          </button>
          <Link to="/">
            <button className="back-button">Tillbaka</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage
