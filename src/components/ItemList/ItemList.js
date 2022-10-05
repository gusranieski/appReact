import Item from "../Item/Item";
import "./ItemList.css";
import { getProducts } from "../../asyncMock";
import { useState, useEffect } from "react";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((response) => {
        console.log(response);
        setProducts(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
        <span className="loader"></span>
      </div>
    );
  }

  console.log(products);
  return (
    <div>
      <h1>Listado de productos</h1>
      <div className="moviesGrid">
        {products.map((prod) => ( <Item key={prod.id} {...prod} /> ))}
      </div>
    </div>
  );
};

export default ItemList;
