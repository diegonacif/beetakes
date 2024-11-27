import styled from "styled-components";
import { deviceBreakpoint } from "../../styles/breakpoints";

export const ServicesContainer = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100vw;
  gap: 3rem 1rem;

  padding: 5rem 0.75rem 7rem;
  background-color: ${(props) => props.theme['gray-300']};

  span {
    text-decoration: underline;
    font-size: small;
    margin-top: 0.25rem;
  }

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

  #service-wrapper {
    &:hover {
      cursor: pointer;
    }
  }

  @media ${deviceBreakpoint.tablet} {
    padding: 5rem 1rem 7rem;
  }
  @media ${deviceBreakpoint.notebook} {
    padding: 5rem 1.5rem 7rem;
  }
  @media ${deviceBreakpoint.desktop} {
    padding: 5rem 2rem 7rem;
  }
  @media ${deviceBreakpoint.widescreen} {
    padding: 5rem 2.5rem 7rem;
  }
`;