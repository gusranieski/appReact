import Contador from "../ItemCount/ItemCount.js";
import "./ItemDetail.css";

const ItemDetail = ({ name, description, img, category, price }) => {
    const handleOnAdd = () => {
      console.log("Agregado al carrito!");
    };
  return (
    <div className="movie-detail">
      <img src={img} alt={name} width={230} height={345}/>
      <div>
        <h2>{name}</h2>
        <p>Sinopsis: {description}</p>
        <p>Categoría: {category}</p>
        <p>Precio: ${price}</p>
        <Contador onAdd={handleOnAdd} stock={10} />
      </div>
    </div>
  );
};

export default ItemDetail;
