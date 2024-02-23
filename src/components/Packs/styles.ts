import styled from "styled-components";
import { deviceBreakpoint } from "../../styles/breakpoints";

export const PacksContainer = styled.div`
  .embla {  
    position: relative;
    overflow: hidden;
    width: 100vw;
    max-width: 125rem;
  }
  .embla__container {
    display: flex;
    color: black;
  }
  .embla__slide {
    display: flex;
    flex: 0 0 100%; 
    justify-content: center;
    min-width: 0;
    max-width: 100%;
  }

  .carousel-btn {
      /* position: relative; */
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      color: ${(props) => props.theme['gray-400']};
      font-size: 2rem;
      font-weight: 600;
      /* top: 0.1rem; */
      border-radius: 9999px;
      cursor: pointer;
      transition: color 0.3s;

      /* &.scroll-button-off {
        color: ${(props) => props.theme['gray-300']};
      } */

      &.left-btn {
        position: absolute;
        left: -0.25rem;
        top: 40%;
      }

      &.right-btn {
        position: absolute;
        right: -0.25rem;
        top: 40%;
      }
    } 

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem 1rem;
  width: 100vw;
  background-color: ${(props) => props.theme['gray-100']};
  padding: 2rem 0.75rem;

  @media ${deviceBreakpoint.tablet} {
    .embla__slide {
      flex: 0 0 100%; 
    }
  }

  @media ${deviceBreakpoint.notebook} {
    .embla__slide {
      flex: 0 0 50%; 
    }
  }

  @media ${deviceBreakpoint.desktop} {
    .embla__slide {
      flex: 0 0 33.33%; 
    }
  }

  @media ${deviceBreakpoint.widescreen} {
    .embla__slide {
      flex: 0 0 25%; 
    }
  }
`;