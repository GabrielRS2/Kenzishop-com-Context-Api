import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  
  width: 100%;
  padding: 1rem;

  background-color: #ffffff;
  box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.25);

  h2 {
    font-size: 1.5rem;
  }

  .resumeContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;

    font-size: .8rem;
  }

  .finish {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 36px;
    border: none;
    border-radius: 8px;

    background-color: var(--color-primary);
    color: #ffffff;
    font-size: 1rem;
  }

  @media(min-width:768px) {
    justify-content: space-around;

    height: 200px;
    max-width: 300px;
  }
`;