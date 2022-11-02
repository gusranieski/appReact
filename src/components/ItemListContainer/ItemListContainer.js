import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/index";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const {categoryId} = useParams()

  useEffect(() => {
    setLoading(true)
    
    const collectionRef = categoryId 
    ? query(collection(db, 'products'), where('category', '==', categoryId)) 
    :collection(db, 'products')

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()

          return { id: doc.id, ...data }
        })

        setProducts(productsAdapted)
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