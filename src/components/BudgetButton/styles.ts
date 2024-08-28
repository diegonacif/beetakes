import styled from "styled-components";

export const BudgetButtonContainer = styled.button`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  z-index: 10;
  /* margin: auto auto 1rem auto; */
  padding: 1rem 1.5rem;
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${(props) => props.theme['gray-700']};
  border-radius: 24px;
  border: 0;
  background: linear-gradient(180deg, rgba(249,206,56,1) 0%, rgba(167,137,32,1) 100%);
  cursor: pointer;

  &#budget-btn-higher {
    bottom: 15vh;
  }
`