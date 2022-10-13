import ItemCount from "../ItemCount/ItemCount.js";
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
        <h3>Categoría: {category}</h3>
        <h3>Precio: ${price}</h3>
        <ItemCount onAdd={handleOnAdd} stock={10} />
      </div>
    </div>
  );
};

export default ItemDetail;
