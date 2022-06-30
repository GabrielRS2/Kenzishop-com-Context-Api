import { ImgContainer, InfoContainer, ProductItem } from "./style";
import { toast } from 'react-toastify';
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

export const Product = ({product}) => {

  const { addToCart } = useContext(CartContext);

  function handleAddCart() {
    addToCart(product)
    toast.success("Produto adicionado ao carrinho");
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
        </div>
        <div className="priceContainer">
          <p className="price">R$ {product.price.toFixed(2).toString().replaceAll(".", ",")}</p>
          <button className="addButton" onClick={handleAddCart}>Adicionar ao carrinho</button>
        </div>
      </InfoContainer>
    </ProductItem>
  )
}