import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="App">
        <ItemListContainer greeting={"Bienvenidos!!!"} />
      </main>
    </div>
  );
}

export default App;
