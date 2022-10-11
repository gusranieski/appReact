import cart from "./assets/cart.svg";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cart-items">
      <div className="widget">
        <img src={cart} alt="cart" />
      </div>
      <div className="cart-span">
        <sup>0</sup>
      </div>
    </div>
  );
};

export default CartWidget;
