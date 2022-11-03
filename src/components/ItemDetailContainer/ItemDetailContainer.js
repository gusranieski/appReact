import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/firebase/firestore/products";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const {productId} = useParams()

  useEffect(() => {

    getProduct(productId)
    .then(product => {
      setProduct(product)
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      setLoading(false);
    });
  }, [productId]);

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <div>
      <ItemDetail key={product.id} {...product} />
    </div>
  );
};

export default ItemDetailContainer;
