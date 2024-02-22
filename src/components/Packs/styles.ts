import styled from "styled-components";

export const PacksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem 1rem;
  width: 100vw;
  background-color: ${(props) => props.theme['gray-100']};
  padding: 2rem 0.75rem;
`;