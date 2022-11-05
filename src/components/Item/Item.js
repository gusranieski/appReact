import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, img, name, price, stock }) => {
  
  return (
    <div>
      <Link to={`/detail/${id}`} >
      <img className="movieImage" width={230} height={345} src={img} alt={name} />
      </Link>
      {
        stock === 0
        ? <h2 className="msj-stock">Sin Stock</h2>
        :""
      }
      <h2>{name}</h2>
      <div >
      <h3>Precio: ${price}</h3>
      <Link to={`/detail/${id}`} className="button-detail" >Ver detalle</Link>
      </div>
    </div>
  );
};

export default Item;
