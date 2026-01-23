const Card = (card) => {
  return (
    <div>
      <h3>{card.title}</h3>
      <img
        src={card.image}
        alt={card.title}
        style={{ width: "100px", height: "auto" }}
      />
    </div>
  );
};
export default Card;
