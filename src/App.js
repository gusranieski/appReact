import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Contador from "./components/ItemCount/ItemCount.js";

function App() {
  const handleOnAdd = () => {
    console.log("Agregado al carrito!");
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="App">
        <ItemListContainer greeting={"Bienvenidos!!!"} />
        <Contador onAdd={handleOnAdd} stock={10}/>
      </main>
    </div>
  );
}

export default App;
