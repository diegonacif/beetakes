import styled from "styled-components";

export const ServicesContainer = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100vw;
  gap: 3rem 1rem;

  padding: 5rem 0.75rem 2rem;
  background-color: ${(props) => props.theme['gray-300']};

  .services-title {
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    font-family: "Kdam Thmor Pro", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2rem;

    color: ${(props) => props.theme['gray-600']};
  }
`;