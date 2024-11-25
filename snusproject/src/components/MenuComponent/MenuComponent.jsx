import "./MenuComponent.css"
import snusProducts from "../../../database/snusproducts"

const MenuComponent = ({ setSelectedSnus, setActiveComponent }) => {
  const handleProductClick = (snus) => {
    setSelectedSnus(snus); // Uppdatera vald produkt i PortalPage
    setActiveComponent("products")
  }

  return (
    <div className="menu-container">
      <h1 className="menu-title">Vårt Snus</h1>
      {snusProducts.map((snus, index) => (
        <div
          className="menu-item"
          key={index}
          onClick={() => handleProductClick(snus)}
        >
          {snus.name}
        </div>
      ))}
    </div>
  )
}

export default MenuComponent

