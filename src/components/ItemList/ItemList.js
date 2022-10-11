import Item from "../Item/Item";
import "./ItemList.css";


const ItemList = ({products}) => {
  
  return (
    <div>
      <div className="moviesGrid">
        {products.map((prod) => ( <Item key={prod.id} {...prod} /> ))}
      </div>
    </div>
  );
};

export default ItemList;