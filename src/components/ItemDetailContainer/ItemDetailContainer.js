import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const {productId} = useParams()

  useEffect(() => {

    const docRef = doc(db, 'products', productId)

    getDoc(docRef).then(response => {
      const data = response.data()
      const productAdapted = { id: response.id, ...data }
      setProduct(productAdapted)
    }).finally(() => {
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
