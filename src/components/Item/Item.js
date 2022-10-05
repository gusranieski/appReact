import "./Item";

const Item = ({ img, name, price }) => {
  return (
    <div>
      <img className="movieImage" width={230} height={345} src={img} alt={name} />
      <h2>{name}</h2>
      <h3>${price}</h3>
    </div>
  );
};

export default Item;
