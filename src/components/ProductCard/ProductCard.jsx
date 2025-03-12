export default function ProductCard({ photo, name, price, onCardClick, card }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={photo} alt="imagen de producto" className="card__image" />
      <h3 className="card__title">{name}</h3>
      <p className="card__price">{price}</p>
    </div>
  );
}
