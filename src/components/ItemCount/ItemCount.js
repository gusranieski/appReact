import React, { useState } from "react";

const Contador = ({ onAdd, stock }) => {
  const [count, setCount] = useState(0);
  console.log("cant agregada: " + count);
  const [cant, setCant] = useState(stock);
  console.log("disponible: " + cant);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
      setCant(cant - 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setCant(cant + 1);
    }
  };

  return (
    <div>
      <div> 
        <h1>CONTADOR</h1>
        <h2>Stock: {cant}</h2>
        <h3>{count}</h3>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <div>
        {/* <button onClick={onAdd}>Agregar al carrito</button> */}
        {count < stock ? <button onClick={onAdd}>Agregar al carrito</button> : null}
      </div>
    </div>
  );
};

export default Contador;
