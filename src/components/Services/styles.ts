import styled from "styled-components";
import { deviceBreakpoint } from "../../styles/breakpoints";

export const ServicesContainer = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100vw;
  gap: 3rem 1rem;

  padding: 5rem 0.75rem 7.5rem;
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

  @media ${deviceBreakpoint.tablet} {
    padding: 5rem 1rem 7.5rem;
  }
  @media ${deviceBreakpoint.notebook} {
    padding: 5rem 1.5rem 7.5rem;

    #service-wrapper {
      filter: drop-shadow(1px 1px 4px ${(props) => props.theme['midnight-100']});
      transition: all 0.1s;
      cursor: pointer;

      &:hover {
        filter: drop-shadow(1px 1px 4px ${(props) => props.theme['yellow-500']});
        transition: all 0.2s;
      }
    }
  }
  @media ${deviceBreakpoint.desktop} {
    padding: 5rem 2rem 7.5rem;
  }
  @media ${deviceBreakpoint.widescreen} {
    padding: 5rem 2.5rem 7.5rem;
  }
`;