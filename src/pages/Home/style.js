import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  
  max-width: 100vw;
  width: 100%;
  max-height: 100vh;
  height: 100%;
`;

export const ProductsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;

  width: 100%;
  padding: 0px 1rem;

  @media(min-width:768px) {
    flex-direction: row;
    flex-wrap: wrap;

    padding: 0px 2rem;
  }
`;