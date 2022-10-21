import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const {categoryId} = useParams()

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts
    asyncFunction(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <div className="item-list-container">
      <div>
        <h1 className="div-title">PELICULAS</h1>
      </div>
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;