const Card = ({ title, image }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={title} style={{ width: "100px", height: "auto" }} />
    </div>
  );
};
export default Card;
