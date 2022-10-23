import { useContext } from "react";
import { CartContext } from "../../context/CartContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ItemCart = ({ product }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <>
      <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.count}</td>
        <td>${product.price}</td>
        <td>${product.count * product.price}</td>
        <td>
          <button onClick={() => removeItem(product.id)}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ItemCart;
