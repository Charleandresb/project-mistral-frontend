import ProductCard from "../ProductCard/ProductCard";
import api from "../../utils/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";

export default function ProductCardList(props) {
  const [cards, setCards] = useState([]);
  const [spiner, setSpiner] = useState(true);
  const { productType } = useParams();

  useEffect(() => {
    async function getCards() {
      const response = await api.productCardList(productType);
      setCards(response);
    }

    getCards();
  }, [productType]);

  useEffect(() => {
    setTimeout(() => {
      setSpiner(false);
    }, 3000);
  }, []);

  return (
    <>
      {spiner ? (
        <Preloader />
      ) : (
        <div className="cards">
          <div className="cards__grid">
            {cards.map((card) => (
              <ProductCard
                key={card._id}
                photo={card.photo}
                name={card.name}
                price={new Intl.NumberFormat("es-Cl", {
                  style: "currency",
                  currency: "CLP",
                }).format(card.price)}
                onCardClick={props.onCardClick}
                card={card}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
