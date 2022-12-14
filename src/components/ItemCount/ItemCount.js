import "./ItemCount.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";

const ItemCount = ({ onAdd, stock, initial=1 }) => {
  const [count, setCount] = useState(initial);
  
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div>
        <h4>Stock: {stock}</h4>
        <div className="counter">
          <FontAwesomeIcon onClick={decrement} icon={faCircleMinus} size="xl" className="highlight"/>
          <h3>{count}</h3>
          <FontAwesomeIcon onClick={increment} icon={faCirclePlus} size="xl" className="highlight"/>
        </div>
      </div>
      <div>
        {
          count > 0 
          ? <button onClick={() => onAdd(count,)}>Agregar al carrito</button>
          : <h3>Agregá una cantidad!</h3>
        }
      </div>
    </div>
  );
};

export default ItemCount;
