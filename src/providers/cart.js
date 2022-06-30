import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  
	const [cart, setCart] = useState([]);

  const addToCart = (product) => {

    let isIncluded = false;
    let quantity = 0;

    cart.forEach(element => {
      if(element.id === product.id) {
        isIncluded = true;
        quantity = element.quantity + 1;
      } 
    });

    if(isIncluded) {
      
      const newProduct = {...product, quantity: quantity};
      const newCart = [...cart.filter((item) => {return item.id !== product.id}), newProduct];

      localStorage.setItem("@KenzieShop:cart", JSON.stringify(newCart));

      setCart(newCart);

    } else {

      const newProduct = {...product, quantity: 1};
      const newCart = [...cart, newProduct];

      localStorage.setItem("@KenzieShop:cart", JSON.stringify(newCart));

      setCart(newCart);
    }
  };

  const removeFromCart = (product) => {

    const newCart = [...cart.filter((item) => {return item.id !== product.id})];

    localStorage.setItem("@KenzieShop:cart", JSON.stringify(newCart));

    setCart(newCart);
  };

return (
  <CartContext.Provider
   value={{ cart, addToCart, removeFromCart }}>
	{children}
  </CartContext.Provider>
 )
}
