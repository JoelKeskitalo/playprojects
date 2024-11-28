import "./AccountComponent.css"

const AccountComponent = ({ userData }) => {
  return (
    <div className="account-container">
      <h1 className="account-header">Din Profil</h1>
      <div className="account-details">
        Namn: {userData.firstName} {userData.lastName}
      </div>
      <div className="account-details">Email: {userData.email}</div>
      <div className="account-details">Medlem sedan: [Datum]</div>
    </div>
  )
}

export default AccountComponent
