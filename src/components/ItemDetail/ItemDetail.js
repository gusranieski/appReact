import ItemCount from "../ItemCount/ItemCount.js";
import "./ItemDetail.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.js";
import NotificationContext from "../../Notification/Notification.js";

const ItemDetail = ({ id, name, description, img, category, price, stock }) => {

  const {addItem, getProductQuantity} = useContext(CartContext)
  const {setNotification} = useContext(NotificationContext)
    
  const [goToCart, setGoToCart] = useState(false)

  const handleOnAdd = (count) => {
    const productToAdd = {
      id, name, price, count
    }
    addItem(productToAdd)
    setNotification('success', 'Producto agregado')
      setGoToCart(true)
    };

  const countAdded = getProductQuantity(id)  

  return (
    <div className="detail-container">
    <div className="movie-detail">
      <img src={img} alt={name} width={230} height={345}/>
      <div>
        <h2>{name}</h2>
        <p>Sinopsis: {description}</p>
        <h4>Categoría: {category}</h4>
        <h4>Precio: ${price}</h4>
        { stock!==0 ? <ItemCount onAdd={handleOnAdd} stock={stock} initial={countAdded} /> : <h2>Sin Stock</h2> }
        { !goToCart ? true :
        <div className="buttons-detail">
          <Link to='/cart' className="button-finish">Ir al carrito</Link>
          <Link to='/' className="button-finish">Seguir comprando</Link> 
        </div> }
        { goToCart ? true
        : <Link to='/' className="button-finish">Volver al listado</Link> }
      </div>
    </div>
  </div>
  );
};

export default ItemDetail;