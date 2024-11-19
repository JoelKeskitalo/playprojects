import "./Login.css"

const Login = () => {
  return (
    <div className="login-container">
      <h2>Logga in</h2>
      <form className="login-form">
        <input className="login-input" type="text" placeholder="Mailadress" />
        <input className="login-input" type="text" placeholder="Lösenord" />
        <button className="login-button">Logga in</button>
      </form>
    </div>
  )
}

export default Login
