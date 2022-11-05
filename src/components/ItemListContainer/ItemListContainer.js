import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";

const ItemListContainer = () => {

  const {categoryId} = useParams()

  const getProductsFromFirestore = () => getProducts(categoryId)

  const { data: products, error, loading } = useAsync(getProductsFromFirestore, [categoryId])

  if (loading) {
    return (
      <Loader />
    );
  }

  if(error) {
    return <h1>Se generó un error...</h1>
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