import styled from "styled-components";
import { deviceBreakpoint } from "../../../../styles/breakpoints";
import customCursor from "../../../../assets/cursor/Normal-Select-y.png";


export const ServicesBeeflixContainer = styled.section`
  position: relative;
  width: 100vw;
  min-height: 100dvh;
  background-color: ${(props) => props.theme['gray-100']};
  padding: 5rem 0.75rem 8rem;

  cursor: url(${customCursor}), auto;

  #services-beeflix-title {
    text-align: center;
    color: ${(props) => props.theme['midnight-800']};
    font-family: "Kdam Thmor Pro", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2rem;
  }

  #flex-columns {
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    margin-top: 1.25rem;
    max-width: 120rem;
    margin: 1.25rem auto 0;
    width: 100%;
    height: 100%;

    @media ${deviceBreakpoint.notebook} {
      display: grid;
      grid-template-columns: 1.65fr 1fr;
    }
  }

  #single-column {
    display: flex;
    flex-direction: column;

    grid-column-start: 2;
    grid-row-start: 1;

    height: fit-content;
    justify-self: center;

    gap: 1.5rem;
  }

  #single-column-widescreen {
    position: sticky;
    top: 20vh;
    display: flex;
    flex-direction: column;

    grid-column-start: 2;
    grid-row-start: 1;

    height: fit-content;
    justify-self: center;

    gap: 1.5rem;
  }

  #internal-budget-button {
    width: max-content;
    z-index: 10;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
    color: ${(props) => props.theme['gray-700']};
    border-radius: 24px;
    border: 0;
    background: linear-gradient(180deg, rgba(249,206,56,1) 0%, rgba(167,137,32,1) 100%);
    cursor: pointer;

    &#budget-btn-higher {
      bottom: 15vh;
    }
  }

  @media ${deviceBreakpoint.tablet} {
    padding: 5rem 1rem 8rem;
  }
  @media ${deviceBreakpoint.notebook} {
    padding: 5rem 1.5rem 5rem;
  }
  @media ${deviceBreakpoint.desktop} {
    padding: 5rem 2rem 5rem;
  }
  @media ${deviceBreakpoint.widescreen} {
    padding: 5rem 2.5rem 5rem;
  }
`

export const ServicesBeeflixGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  background-color: ${(props) => props.theme['gray-100']};
  margin-top: 2rem;
`

export const ServiceText = styled.span`
  color: ${(props) => props.theme['gray-800']};
  font-size: larger;
  max-width: 38rem;
  margin: 0 auto;

  @media ${deviceBreakpoint.desktop} {
    font-size: 1.5rem;
  }
`