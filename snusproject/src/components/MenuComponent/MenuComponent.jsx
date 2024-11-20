import "./MenuComponent.css";
import snusProducts from "../../../database/snusproducts";

const MenuComponent = () => {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Vårt Snus</h1>
      {snusProducts.map((snus, index) => (
        <div className="menu-item" key={index}>
          {snus.name}
        </div>
      ))}
    </div>
  );
};

export default MenuComponent;
