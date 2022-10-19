import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { getProductById } from "../../asyncMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const {productId} = useParams()

  useEffect(() => {
    getProductById(productId)
      .then((response) => {
        setProduct(response);
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
