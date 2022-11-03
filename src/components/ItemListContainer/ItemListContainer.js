import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore/products";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const {categoryId} = useParams()

  useEffect(() => {
    setLoading(true)

    getProducts(categoryId)
    .then(products => {
      setProducts(products)
    })
    .catch(error => {
      console.log(error)
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