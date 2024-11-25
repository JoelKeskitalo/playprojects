import "./Login.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()


  const handleChange = (e) => {
    const { name, value } = e.target
      if(name === 'email')setEmail(value)
      if(name === 'password') setPassword(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const loginData = { email, password }
    const savedData = JSON.parse(localStorage.getItem("userData"))

    if (!savedData) {
      console.error('User not found')
      return
    }

    if (loginData.email !== savedData.email || loginData.password !== savedData.password) {
      console.error('Incorrent mail or password')
      return
    }

    console.log('Login successful')
    navigate('/portal')
  }

  

  return (
    <div className="login-container">
      <h2>Logga in</h2>
      <form className="login-form">
        <input 
        className="login-input"
        name='email' 
        type="text" 
        placeholder="Mailadress" 
        required
        onChange={handleChange}
        />
        <input 
        className="login-input" 
        name='password'
        type="text" 
        placeholder="Lösenord"
        required
        onChange={handleChange}
        />
        <button 
        className="login-button" 
        type="submit" 
        onClick={handleSubmit}
        >
          Logga in
        </button>
        <Link to="/">
          <button className="back-button">Tillbaka</button>
        </Link>
      </form>
    </div>
  )
}

export default Login
