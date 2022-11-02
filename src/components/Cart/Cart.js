import ItemCart from "../ItemCart/ItemCart";
import { useContext } from 'react';
import { CartContext } from "../../context/CartContext.js";
import { Link } from "react-router-dom";
import "./Cart.css"

const Cart = () => {

    const { cart, totalQuantity, totalPrice, clearCart } = useContext(CartContext)

    if(cart.length === 0) {
        return (
            <div className="cart">
                <h1 className="title-products">No tienes productos seleccionados</h1>
                <Link to='/' className="button-finish">Volver al listado</Link>
            </div>
        )
    }

    return ( 
        <div className="cart">
            <h1 className="title-products">Tus productos:</h1>
            <hr></hr>
            <table>
            <thead>
                <tr>
                    <th>Producto:</th>
                    <th>Cantidad:</th>
                    <th>Precio:</th>
                    <th>Subtotal:</th>
                    <th>Eliminar:</th>
                </tr>
            </thead>
            <tbody>
            {
                cart.map(product => <ItemCart key={product.id} product={product} /> )
            }
            </tbody>
            </table>
            <h3>Cantidad total de productos: {totalQuantity}</h3>
            <h1 className="title-products">Total: ${totalPrice()}</h1>
            <button className="button-cart"><Link to='/checkout'>Ir al Checkout</Link></button>
            <button className="button-cart" onClick={clearCart}>Eliminar todo</button>
        </div>
    );
}

export default Cart;