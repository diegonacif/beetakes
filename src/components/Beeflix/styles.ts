import styled from "styled-components";
import { deviceBreakpoint } from "../../styles/breakpoints";

export const BeeflixContainer = styled.section`
  position: relative;
  width: 100vw;
  background-color: ${(props) => props.theme['gray-100']};
  padding: 2rem 0.75rem 8rem;

  #beeflix-title {
    text-align: center;
    color: ${(props) => props.theme['midnight-800']};
    font-family: "Kdam Thmor Pro", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2rem;
  }

  @media ${deviceBreakpoint.tablet} {
    padding: 2rem 1rem 8rem;
  }
  @media ${deviceBreakpoint.notebook} {
    padding: 2rem 1.5rem 8rem;
  }
  @media ${deviceBreakpoint.desktop} {
    padding: 2rem 2rem 8rem;
  }
  @media ${deviceBreakpoint.widescreen} {
    padding: 2rem 2.5rem 8rem;
  }
`

export const BeeflixGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  background-color: ${(props) => props.theme['gray-100']};
  margin-top: 2rem;
`