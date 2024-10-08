import styled from "styled-components";
import { deviceBreakpoint } from "../../styles/breakpoints";

export const FeedbacksContainer = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  width: 100vw;
  max-width: 100vw;
  background-color: ${(props) => props.theme['gray-300']};
  padding: 2rem 0.75rem 8rem;
  overflow: hidden;

  #feedbacks-title {
    width: 100%;
    color: ${(props) => props.theme['gray-600']};
    text-align: center;
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