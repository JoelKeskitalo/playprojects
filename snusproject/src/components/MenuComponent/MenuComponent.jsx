import "./MenuComponent.css"
import { useState } from 'react'
import snusProducts from "../../../database/snusproducts"
import ProductComponent from "../ProductComponent/ProductComponent"

const MenuComponent = () => {

  const [selectedSnus, setSelectedSnus] = useState(null)

  const handleProductClick = (snus) => {
    setSelectedSnus(snus)
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

      {selectedSnus && <ProductComponent product={selectedSnus} />}
    </div>
  )
}

export default MenuComponent;
