import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   const cartFromStorage = localStorage.getItem("cart");
  //   const addCountFromStorage = localStorage.getItem("addQuantity");
  //   const removeCountFromStorage = localStorage.getItem("removeQuantity");
  //   if (cartFromStorage) {
  //     setCart(JSON.parse(cartFromStorage));
  //   }
  //   if (addCountFromStorage) {
  //     setProductCount(Number(addCountFromStorage));
  //   } else {
  //     setProductCount(Number(removeCountFromStorage));
  //   }
  // }, []);

  function addToCart(product) {
    setCart((state) => {
      if (state.find((item) => item._id === product._id)) {
        const result = state.map((item) => {
          return item._id === product._id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item;
        });
        return result;
      }
      const newCart = [...state, product];
      // localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
    setProductCount(productCount + product.quantity);
    setTotalPrice(totalPrice + product.price * product.quantity);
  }

  function addProductQuantity(product) {
    setCart((state) => {
      const result = state.map((item) => {
        return item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      return result;
    });
    // localStorage.setItem("addQuantity", productCount + 1);
    setProductCount(productCount + 1);
    setTotalPrice(totalPrice + product.price * 1);
  }

  function removeProductQuantity(product) {
    setCart((state) => {
      const filterResult = state.filter((item) => {
        return (
          item._id !== product._id ||
          (item._id === product._id && item.quantity !== 1)
        );
      });
      const result = filterResult.map((item) => {
        return item._id === product._id
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
      return result;
    });
    // localStorage.setItem("removeQuantity", productCount - 1);
    setProductCount(productCount - 1);
    setTotalPrice(totalPrice - product.price * 1);
  }

  function removeFromCart(id) {
    const productToRemove = cart.find((product) => product._id === id);
    const newCart = cart.filter((product) => product._id !== id);
    setCart(newCart);
    setProductCount(productCount - productToRemove.quantity);
    setTotalPrice(
      totalPrice - productToRemove.price * productToRemove.quantity
    );
  }

  function clearCart() {
    setCart([]);
    setProductCount(0);
    setTotalPrice(0);
  }

  const contextValue = {
    cart,
    productCount,
    totalPrice,
    addToCart,
    addProductQuantity,
    removeProductQuantity,
    removeFromCart,
    clearCart,
  };

  return <Provider value={contextValue}>{children}</Provider>;
}

export default CartProvider;
