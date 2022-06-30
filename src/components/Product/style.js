import styled from "styled-components";

export const ProductItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  max-width: 100vw;
  width: 100%;
  height: 200px;

  background-color: #ffffff;

  @media(min-width:768px) {
    flex-direction: column;
    max-width: 250px;
    height: auto;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 200px;

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
    font-size: 1rem;
    font-weight: 600;
  }

  .models {
    font-size: 0.75rem;
  }

  .nameContainer {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .priceContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  .addButton {
    background-color: var(--color-primary);

    height: 32px;
    width: 90px;
    border-radius: 4px;
    border: none;

    font-size: .8rem;
    color: #ffffff;
  }

  @media(min-width:768px) {
    gap: 40px;
    height: 200px;

    .priceContainer {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    
    .addButton {
      height: 32px;
      width: 100%;
    }
  }
`;