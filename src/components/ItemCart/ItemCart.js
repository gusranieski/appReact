import { useContext } from "react";
import { CartContext } from "../../context/CartContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./ItemCart.css";

const ItemCart = ({ product }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <>
      <tr>
        <td>{product.name}</td>
        <td>{product.count}</td>
        <td>${product.price}</td>
        <td>${product.count * product.price}</td>
        <td>
          <FontAwesomeIcon
            onClick={() => removeItem(product.id)}
            icon={faTrashCan}
            size="xl"
            className="trash"
          />
        </td>
      </tr>
    </>
  );
};

export default ItemCart;
