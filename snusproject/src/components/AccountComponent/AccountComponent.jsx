import "./AccountComponent.css"

const AccountComponent = () => {
  return (
    <div className="account-container">
      <h1 className="account-header">Din Profil</h1>
      <div className="account-details">Namn: [Användarnamn]</div>
      <div className="account-details">Email: [Användarens email]</div>
      <div className="account-details">Medlem sedan: [Datum]</div>
    </div>
  )
}

export default AccountComponent
