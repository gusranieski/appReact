import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, img, name, price }) => {
  return (
    <div>
      <Link to={`/detail/${id}`} >
      <img className="movieImage" width={230} height={345} src={img} alt={name} />
      </Link>
      <h2>{name}</h2>
      <h3>Precio: ${price}</h3>
      <div>
      <Link to={`/detail/${id}`} className="button-detail" >Ver detalle</Link>
      </div>
    </div>
  );
};

export default Item;
