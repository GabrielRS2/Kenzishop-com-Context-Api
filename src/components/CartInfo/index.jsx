import { Container } from "./style";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../providers/cart";

export const CartInfo = () => {

  const { cart } = useContext(CartContext);

  const [ total, setTotal ] = useState(0);
  const [ quantity, setQuantity ] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((a, b) => a + b.price*b.quantity, 0));
    setQuantity(cart.reduce((a, b) => a + b.quantity, 0));
  }, [cart])

  return(
    <Container>
      <h2>Resumo do Pedido</h2>
      <div className="resumeContainer">
        <p>quantidade: {quantity}</p>
        <p>Total: {total.toFixed(2).toString().replaceAll(".", ",")}</p>
      </div>
      <button className="finish">Finalizar compra</button>
    </Container>
  );
}