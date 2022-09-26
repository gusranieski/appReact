import cart from "./assets/cart.svg";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cart-items">
      <div className="widget">
        <img src={cart} alt="cart" />
      </div>
      <div className="cart-span">
        <span>0</span>
      </div>
    </div>
  );
};

export default CartWidget;
