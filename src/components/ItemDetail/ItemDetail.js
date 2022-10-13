import ItemCount from "../ItemCount/ItemCount.js";
import "./ItemDetail.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ name, description, img, category, price }) => {
    
  const [goToCart, setGoToCart] = useState(false)

  const handleOnAdd = () => {
      setGoToCart(true)
    };

  return (
    <div className="movie-detail">
      <img src={img} alt={name} width={230} height={345}/>
      <div>
        <h2>{name}</h2>
        <p>Sinopsis: {description}</p>
        <h4>Categoría: {category}</h4>
        <h4>Precio: ${price}</h4>
        {/* aca va un ternario, con validacion y muestra el ItemCount ó un link a Cart */}
        { goToCart ? <Link to='/cart' className="button-finish">FINALIZAR COMPRA</Link> : <ItemCount onAdd={handleOnAdd} stock={10} /> }
      </div>
    </div>
  );
};

export default ItemDetail;
