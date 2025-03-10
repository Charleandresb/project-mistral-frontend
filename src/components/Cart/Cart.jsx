import React, { useContext } from "react";
import { cartContext } from "../../contexts/CartProvider";
import { ShoppingCart } from "lucide-react";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    cart,
    productCount,
    totalPrice,
    addProductQuantity,
    removeProductQuantity,
    removeFromCart,
    clearCart,
  } = useContext(cartContext);

  const navigate = useNavigate();

  function handleBuy() {
    navigate("/página-en-desarrollo");
  }

  console.log("carrito", cart);

  const total = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(totalPrice);

  if (!cart.length)
    return (
      <div className="cartEmpty">
        <ShoppingCart className="cartEmpty__icon" />
        <h2 className="cartEmpty__text">Tu carrito está vacío</h2>
      </div>
    );
  return (
    <section className="cart">
      <div className="cart__container">
        <div className="cart__header">
          <div className="cart__count">
            <ShoppingCart className="cart__count-icon" />
            <h5 className="cart__count-text">
              Total de productos: {productCount}
            </h5>
          </div>
          <div className="cart__header-titles">
            <p className="cart__product">Producto</p>
            <p className="cart__name">Nombre</p>
            <p className="cart__price">Precio</p>
            <p className="cart__quantity">Cantidad</p>
          </div>
        </div>
        {cart.map((item) => {
          return (
            <div key={item._id} className="cart__product-grid">
              <img src={item.photo} className="cart__grid-image" alt="" />
              <p className="cart__grid-name">{item.name}</p>
              <p className="cart__grid-price">
                {new Intl.NumberFormat("es-Cl", {
                  style: "currency",
                  currency: "CLP",
                }).format(item.price)}
              </p>
              <p className="cart__grid-quantity">{item.quantity}</p>
              <div className="cart__grid-buttons">
                <button
                  className="cart__remove-button"
                  onClick={() => removeProductQuantity(item)}
                >
                  –
                </button>
                <button
                  className="cart__add-button"
                  onClick={() => addProductQuantity(item)}
                >
                  +
                </button>
                <Trash2
                  className="cart__empty-button"
                  onClick={() => removeFromCart(item._id)}
                />
              </div>
            </div>
          );
        })}

        <div className="cart__total">
          <h3 className="cart__total-text">Total: {total}</h3>
        </div>
        <div className="cart__button-container">
          <button className="cart__clear-button" onClick={() => clearCart()}>
            Vaciar carrito
          </button>
          <button className="cart__pay-button" onClick={handleBuy}>
            Comprar
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;

{
  /* <section className="cart">
<div className="cart__container">
  <div className="cart__table">
    <div className="cart__count">
      <ShoppingCart className="cart__count-icon" />
      <h5>Total de productos: {productCount}</h5>
    </div>
    <table className="cart__table-container">
      <tbody>
        <tr className="cart__border-table">
          <td className="cart__product">
            <b>Producto</b>
          </td>
          <td className="cart__name">
            <b>Nombre</b>
          </td>
          <td className="cart__price">
            <b>Precio</b>
          </td>
          <td className="cart__quantity">
            <b>Cantidad</b>
          </td>
        </tr>
        {cart.map((item) => {
          return (
            <tr key={item._id} className="cart__product-case">
              <td>
                <img src={item.photo} className="cart__image" alt="" />
              </td>
              <td>{item.name}</td>
              <td>
                {new Intl.NumberFormat("es-Cl", {
                  style: "currency",
                  currency: "CLP",
                }).format(item.price)}
              </td>
              <td>{item.quantity}</td>
              <td className="cart__button-container">
                <button
                  className="cart__remove-button"
                  onClick={() => removeProductQuantity(item)}
                >
                  –
                </button>
                <button
                  className="cart__add-button"
                  onClick={() => addProductQuantity(item)}
                >
                  +
                </button>
                <button
                  className="cart__empty-button"
                  onClick={() => removeFromCart(item._id)}
                >
                  Eliminar del carrito
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  <div className="cart__total">
    <h3>Total: {total}</h3>
  </div>
  <div className="cart__button-container">
    <button className="cart__clear-button" onClick={() => clearCart()}>
      Vaciar carrito
    </button>
    <button className="cart__pay-button">Pagar</button>
  </div>
</div>
</section> */
}
