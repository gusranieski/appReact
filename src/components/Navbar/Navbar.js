import "./Navbar.css";
import logo from "./assets/logocinema.png";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="nav-items">
      <div className="img-logo">
        <img src={logo} alt="logo" />
      </div>
      <h1>BACKYARD CINEMA</h1>
      <div className="buttons-items">
        <button>Inicio</button>
        <button>Categorías</button>
        <button>Películas</button>
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};
export default Navbar;
