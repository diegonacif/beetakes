import styled from "styled-components";
import { deviceBreakpoint } from "../../styles/breakpoints";

export const NavbarSecContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 3.5rem;
  color: black;
  padding: 0 0.75rem;
  z-index: 20;
  transition: padding 0.3s ease-in-out;

  background: linear-gradient(90deg, #6A6C71 0%, #34374B 50%, #282A36 100%);
;

  .logo-wrapper {
    display: flex;
    align-items: center;
    height: 100%;

    #bee-logo {
      height: 90%;
    }
    
  }

  nav {
    ul {
      display: flex;
      list-style-type: none;
      gap: 0.5rem;

      li {
        position: relative;
        min-width: fit-content;
        font-size: 1.25rem;
        color: ${(props) => props.theme['yellow-500']};
        padding: 0.375rem;
        border-radius: 4px;
        overflow: hidden;
        cursor: pointer;
        transition: color 0.3s ease-in-out, font-size 0.3s;

        &::before {
          background: ${(props) => props.theme['yellow-500']};
          content: "";
          inset: 0;
          position: absolute;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease-in-out;
          z-index: -1;
        }

        @media ${deviceBreakpoint.notebook} {
          &:hover {
            color: ${(props) => props.theme['midnight-800']};
          }

          &:hover::before {
            transform: scaleX(1);
            transform-origin: left;
          }
        }

        @media ${deviceBreakpoint.widescreen} {
          font-size: 1.375rem;
        }
      }
    }
  }

  @media ${deviceBreakpoint.tablet} {
    padding: 0 1rem;
  }
  @media ${deviceBreakpoint.notebook} {
    padding: 0 1.5rem;
  }
  @media ${deviceBreakpoint.desktop} {
    padding: 0 2rem;
  }
  @media ${deviceBreakpoint.widescreen} {
    padding: 0 2.5rem;
  }

`