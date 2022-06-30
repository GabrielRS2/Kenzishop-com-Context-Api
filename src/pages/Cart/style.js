import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  width: 100%;
  height: 100%;
`;

export const MainCart = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: .5rem;

  width: 100%;
  padding: 0px 1rem 1rem 1rem;
  
  .cartListContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: .5rem;
  }

  .listInfoContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 40px;
    padding: 0px 1rem;

    font-weight: 600;

    background-color: #ffffff;
    box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.25);
  }

  .priceText {
    display: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 100%;
  }

  @media(min-width:768px) {
    flex-direction: row;

    .listInfoContainer {

    }

    .priceText {
      display: flex;
    }

    .cartListContainer {
      width: 700px;
    }
  }
  `;