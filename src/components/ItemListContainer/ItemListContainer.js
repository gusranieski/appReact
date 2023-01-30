import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";
import Cover from "../Cover/Cover";

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
      <Cover/>
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;