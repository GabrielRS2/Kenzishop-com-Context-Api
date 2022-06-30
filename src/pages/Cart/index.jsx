import { useContext } from "react";
import { CartInfo } from "../../components/CartInfo";
import { Header } from "../../components/Header";
import { ProductCart } from "../../components/ProductCart";
import { CartContext } from "../../providers/cart";
import { Container, MainCart } from "./style";

export const Cart = () => {

  const { cart } = useContext(CartContext);

  return(
    <Container>
      <Header></Header>
      <MainCart>
        <div className="cartListContainer">
          <div className="listInfoContainer">
            <p>Produto</p>
            <p className="priceText">Preço</p>
          </div>
          <ul>
            {cart?.map((product) => <ProductCart key={product.id} product={product}/>)}
          </ul>
        </div>
        <CartInfo />
      </MainCart>
    </Container>
  );
}