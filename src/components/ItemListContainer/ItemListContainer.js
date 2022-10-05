import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <div className="div-title">
        <h1>{greeting}</h1>
      </div>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
