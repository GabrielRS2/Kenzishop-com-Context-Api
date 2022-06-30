import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  width: 100%;
  height: 72px;
  box-shadow: 0px 4px 40px -4px rgba(0, 0, 0, 0.25);

  background-color: #f5f5f5;

  font-weight: 700;

  h1 {
    font-size: 20px;
  }

  h1 .subTitle {
    font-size: 12px;
    font-weight: 700;
    color: var(--color-primary);
  }

  h1:hover {
    cursor: pointer;
  }

  @media(min-width:768px) {

    padding: 1rem 2rem;

  }
`;

export const CartHeaderContainer = styled.div`
  display: flex;

  .cartIcon {
    font-size: 1rem;
    color: var(--grey-2);
  }

  .cartQuantity {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 12px;
    height: 12px;
    border-radius: 50%;

    background-color: blue;

    position: relative;
    top: -4px;
    right: -21px;
  }

  .quantity {
    color: #ffffff;

    font-size: 0.7rem;
    font-weight: 400;
  }
  
  .goCart {
    background-color: #f5f5f5;
    border: none;
  }

  @media(min-width:768px) {

    .cartIcon {
      font-size: 1.1rem;
    }

    .cartQuantity {
      width: 16px;
      height: 16px;

      top: -7px;
      right: -23px;
    }

    .goCart {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;