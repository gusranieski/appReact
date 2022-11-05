import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";

const ItemDetailContainer = () => {

  const {productId} = useParams()

  const getProductsFromFirestore = () => getProduct(productId)

  const { data: product, error, loading } = useAsync(getProductsFromFirestore, [productId])

  if (loading) {
    return (
      <Loader />
    );
  }

  if(error) {
    return <h1>Se generó un error...</h1>
  }

  return (
    <div>
      <ItemDetail key={product.id} {...product} />
    </div>
  );
};

export default ItemDetailContainer;
