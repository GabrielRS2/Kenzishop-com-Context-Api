import { CartHeaderContainer, HeaderContainer } from "./style"
import { BsCart } from 'react-icons/bs';
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../providers/cart";

export const Header = () => {

  const { cart } = useContext(CartContext);

  const [ quantity, setQuantity ] = useState(0);

  const hystory = useHistory();

  useEffect(() => {
    setQuantity(cart.reduce((a, b) => a + b.quantity, 0));
  }, [cart])

  function handleGoCart() {
    hystory.push("/cart");
  }

  function handleGoHome() {
    hystory.push("/");
  }

  return (
    <HeaderContainer>
      <h1 onClick={handleGoHome}>Kenzie <span className="subTitle">Shop</span></h1>
      <CartHeaderContainer>
        {quantity > 0 && 
        <div className="cartQuantity">
          <p className="quantity">{quantity}</p>
        </div>
        }
        <button className="goCart" onClick={handleGoCart}><span className="cartIcon"><BsCart></BsCart></span> Carrinho</button>
      </CartHeaderContainer>
    </HeaderContainer>
  )
}