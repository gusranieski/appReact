import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
// import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

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
        console.log(response)
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          console.log(data)

          return { id: doc.id, ...data }
        })

        console.log(productsAdapted)
        setProducts(productsAdapted)
        // setProducts(response);
      })
      .finally(() => {
        setLoading(false);
      });

    // const asyncFunction = categoryId ? getProductsByCategory : getProducts
    // asyncFunction(categoryId)
    //   .then((response) => {
    //     setProducts(response);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
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