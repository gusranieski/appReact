import "./Navbar.css";
import logo from "./assets/logocinema.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-items">
      <Link to='/' className="img-logo">
        <img src={logo} alt="logo" />
      </Link>
      <h1 className="titulo">BACKYARD CINEMA</h1>
      <div >
        <ul className="buttons-items">
          <li>
          <Link to='/category/accion' className="button-nav">Acción</Link>
          </li>
          <li>
          <Link to='/category/suspenso' className="button-nav">Suspenso</Link>
          </li>
          <li>
          <Link to='/category/terror' className="button-nav">Terror</Link>
          </li>
          <li>
          <Link to='/category/aventura' className="button-nav">Aventura </Link>
          </li>
        </ul>
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};
export default Navbar;
