import cart from "./assets/cart.svg";
import "./CartWidget.css";
import { useContext } from 'react';
import { CartContext } from "../../context/CartContext.js";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext) 

  return (
    <div className="cart-items">
      <div className="widget">
      <Link to='/cart' ><img src={cart} alt="cart" /></Link>
      </div>
      <div className="cart-span">
        <sup>{totalQuantity}</sup>
      </div>
    </div>
  );
};

export default CartWidget;
