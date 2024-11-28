import "./RegisterPage.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

const RegisterPage = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target // key-value pair 
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("userData", JSON.stringify(formData))
    alert("Användare registrerad! Data sparad lokalt")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    })
    navigate("/portal")
  }

  return (
    <div className="register-container">
      <h1 className="register-title">Registrera dig</h1>
      <form className="register-form">
        <div className="form-group">
          <label htmlFor="firstName">Förnamn</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Efternamn</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Lösenord</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="lower-buttons">
          <button
            type="submit"
            className="register-button"
            onClick={handleSubmit}
          >
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
