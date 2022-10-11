import ItemDetail from "../ItemDetail/ItemDetail";
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
      <div className="loader-container">
        <h1>Loading...</h1>
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div>
      <ItemDetail key={product.id} {...product} />
    </div>
  );
};

export default ItemDetailContainer;
