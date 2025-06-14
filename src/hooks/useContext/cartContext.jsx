// import React,{createContext,useState} from 'react'

// export const CartContext=createContext(null);

// export const CartProvider=(props)=>{
//  const [cartItems, setCartItems] = useState([]);
//    const addToCart = (product) => {
//     setCartItems(prev => [...prev, product]);
//   };

//     return <CartContext.Provider value={{cartItems, addToCart,setCartItems}}>
//         {props.children}
//     </CartContext.Provider>
// }


import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.color === product.color
      );

      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += product.quantity;
        updatedCart[existingProductIndex].price += product.price * product.quantity; 
        return updatedCart;
      } else {
        return [...prevCart, product];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart,setCartItems }}>
     {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
