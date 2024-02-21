import styled from "styled-components";

export const ParticularContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  max-width: 23rem;
  width: 23rem;
  color: ${(props) => props.theme['gray-600']};
  text-align: center;
`;