import { useContext } from "react";
import { Header } from "../../components/Header";
import { Product } from "../../components/Product";
import { ProductContext } from "../../providers/product";
import { Container, ProductsList } from "./style";

export const Home = () => {

  const { products } = useContext(ProductContext);

  return(
    <Container>
      <Header>
      </Header>
      <ProductsList>
        {products?.map((product) => <Product key={product.id} product={product}/>)}
      </ProductsList>
    </Container>
  );
}