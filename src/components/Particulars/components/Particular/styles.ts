import styled from "styled-components";

export const ParticularContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 23rem;
  color: ${(props) => props.theme['gray-600']};
  text-align: center;

  img {
    height: 5.3125rem;
  }

  h3 {
    font-weight: 700;
  }

  span {
    font-weight: 400;
  }
`;