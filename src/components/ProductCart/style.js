import styled from "styled-components";

export const ProductItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  max-width: 100vw;
  width: 100%;
  height: 210px;

  background-color: #ffffff;
  /* border: 1px solid var(--grey-2); */
  box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.25);

  @media(min-width:768px) {
    flex-direction: row;
    max-width: 700px;
    height: auto;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 210px;

  img {
    height: 200px;
  }

  @media(min-width:768px) {
    width: 250px;
    height: 250px;

    img {
      height: 250px;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  padding: 1rem;

  .name {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .models {
    font-size: 0.75rem;
  }

  .nameContainer {
    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 300px;
    width: 100%;
  }

  .priceContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;

    width: 100%;
  }

  .price {
    margin-right: 12px;
  }

  .removeCartButton {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 150px;
    height: 36px;
    border: none;
    border-radius: 8px;

    background-color: var(--color-primary);
    color: #ffffff;
  }


  @media(min-width:768px) {
    flex-direction: row;
    justify-content: space-between;

    gap: 40px;
    height: 100%;

    .priceContainer {
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;

      height: 100%;
    }

    .price {
      margin-right: 0px;
    }

    .priceProductCart {
      display: none;
    } 

  }
`;