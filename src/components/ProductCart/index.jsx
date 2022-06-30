import { ImgContainer, InfoContainer, ProductItem } from "./style";
import { toast } from 'react-toastify';
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

export const ProductCart = ({product}) => {

  const { removeFromCart } = useContext(CartContext);

  function handleRemoveCartItem() {
    removeFromCart(product);
    toast.success("Produto removido do carrinho");
  }

  return(
    <ProductItem>
      <ImgContainer>
        <img src={product.link} alt={product.name}></img>
      </ImgContainer>
      <InfoContainer>
        <div className="nameContainer">
          <p className="name">{product.name}</p>
          <p className="models">Modelos: {product.models.map((model, index) => index + 1 === product.models.length ? model : model + ", ")}</p>
          <p className="models">quantidade: {product.quantity}</p>
        </div>
        <div className="priceContainer">
          <p className="price"><span className="priceProductCart">Preço: </span>R$ {product.price.toFixed(2).toString().replaceAll(".", ",")}</p>
          <button className="removeCartButton" onClick={handleRemoveCartItem}>Remover Produto</button>
        </div>
      </InfoContainer>
    </ProductItem>
  )
}