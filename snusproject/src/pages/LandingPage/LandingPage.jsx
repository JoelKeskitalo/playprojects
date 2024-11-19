import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Välkommen till Snus-shoppen!</h1>
      <div className="landing-buttons">
        <button className="landing-button">Logga in</button>
        <button className="landing-button">Registrera dig</button>
      </div>
    </div>
  )
}

export default LandingPage
