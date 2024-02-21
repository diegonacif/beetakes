import styled from "styled-components";

export const ServicesContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100vw;
  gap: 3rem 1rem;

  padding: 4rem 0.75rem 2rem;
  background-color: ${(props) => props.theme['gray-100']};

  .services-title {
    position: absolute;
    top: 0.75rem;
    left: 50%;
    transform: translateX(-50%);

    color: ${(props) => props.theme['gray-600']};
  }
`;