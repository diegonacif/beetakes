import styled from "styled-components";

export const BudgetButtonContainer = styled.button`
  position: relative;

  width: max-content;
  max-width: 100%;

  padding: 1rem 1.5rem;

  font-family: "Ubuntu", sans-serif;
  font-size: clamp(1rem, 4vw, 1.25rem);
  font-weight: 500;
  white-space: nowrap;

  color: ${(props) => props.theme["gray-700"]};

  border: 0;
  border-radius: 24px;

  background: linear-gradient(
    180deg,
    rgba(249, 206, 56, 1) 0%,
    rgba(167, 137, 32, 1) 100%
  );

  cursor: pointer;
`;