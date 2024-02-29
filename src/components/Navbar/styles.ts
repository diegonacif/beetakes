import styled from "styled-components";
import { deviceBreakpoint } from "../../styles/breakpoints";

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 3rem;
  color: black;
  padding: 0 0.75rem;
  z-index: 20;

  background: ${(props) => props.color === 'gradient' ?
  'linear-gradient(90deg, rgba(239,252,255,0.3) 0%, rgba(101,101,101,0.3) 50%, rgba(31,31,31,0.3) 100%)' :
  'linear-gradient(90deg, rgba(126,129,130,0.97) 0%, rgba(101,101,101,0.97) 50%, rgba(31,31,31,0.97) 100%)'
  };  

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
        color: ${(props) => props.theme['yellow-500']};
        padding: 0.25rem;
        border-radius: 3px;
        overflow: hidden;
        cursor: pointer;
        transition: color 0.3s ease-in-out;

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
      }
    }
  }

`