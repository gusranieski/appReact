import cart from "./assets/cart.svg";
import "./CartWidget.css";
import { useContext } from 'react';
import { CartContext } from "../../context/CartContext.js";

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext) 

  return (
    <div className="cart-items">
      <div className="widget">
        <img src={cart} alt="cart" />
      </div>
      <div className="cart-span">
        <sup>{totalQuantity}</sup>
      </div>
    </div>
  );
};

export default CartWidget;
