import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../contexts/CartProvider";
import api from "../../utils/api";

export default function ProductPurchase() {
  const [product, setProduct] = useState([]);
  // const [productCounter, setProductCounter] = useState(1);
  const { addToCart } = useContext(cartContext);
  const { productCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getProduct() {
      const response = await api.selectedProduct(productCode);
      setProduct(response);
      console.log(response);
    }

    getProduct();
  }, [productCode]);

  // function handleProductCounterUp() {
  //   setProductCounter(productCounter + 1);
  // }

  // function handleProductCounterDown() {
  //   if (productCounter >= 2) {
  //     setProductCounter(productCounter - 1);
  //   }
  // }

  function handleAddItem() {
    addToCart({ ...product, quantity: 1 });
  }

  function handleBuyNow() {
    navigate("/página-en-desarrollo");
  }

  const price = new Intl.NumberFormat("es-Cl", {
    style: "currency",
    currency: "CLP",
  }).format(product.price);

  return (
    <div className="product">
      <div className="product__grid">
        <img
          src={product.photo}
          alt={product.name}
          className="product__image"
        />
        <h3 className="product__title">{product.name}</h3>
        <p className="product__code">{product.cod}</p>
        <p className="product__description">{product.description}</p>
        <p className="product__price">{price}</p>
        {/* <div className="product__counter">
          <button
            className="product__button-left"
            onClick={handleProductCounterDown}
          >
            -
          </button>
          <span className="product__counter-length">{productCounter}</span>
          <button
            className="product__button-right"
            onClick={handleProductCounterUp}
          >
            +
          </button>
        </div> */}
        <button className="product__addButton" onClick={handleAddItem}>
          Agregar a la bolsa
        </button>
        <button className="product__buyButton" onClick={handleBuyNow}>
          Comprar ahora
        </button>
      </div>
    </div>
  );
}
