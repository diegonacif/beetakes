import styled from "styled-components";
import { deviceBreakpoint } from "../../styles/breakpoints";

export const WhatsappButtonContainer = styled.div`
  position: fixed;
  right: .75rem;
  bottom: 1.25rem;

  display: none;
  &#isButtonShown {
    display: flex;
  }

  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 4rem;
  height: 4rem;
  background: ${(props) => props.theme['yellow-500']};
  background: linear-gradient(234deg, rgba(249,206,56,1) 0%, rgba(167,137,32,1) 100%);
  border-radius: 9999px;
  transition: filter 0.3s, width 0.3s, right 0.3s;
  filter: opacity(0.85);
  overflow: hidden;
  z-index: 15;
  cursor: pointer;

  transition: display 0.3s ease;

  svg {
    position: relative;
    bottom: 1px;
    left: 1px;
    color: ${(props) => props.theme['gray-800']};
  }
  
  #speak-with-us {
    font-weight: bold;
    color: ${(props) => props.theme['gray-800']};
    display: none;
    min-width: max-content;
    transition: display 0.3s;
  }

  @media ${deviceBreakpoint.tablet} {
    right: 1rem;
  }
  @media ${deviceBreakpoint.notebook} {
    right: 1rem;
    
    &:hover {
      filter: opacity(1);
      width: 14rem;
      
      #speak-with-us {
        display: inline-block;
      }
    }
  }
  @media ${deviceBreakpoint.desktop} {
    right: 2rem;
  }
  @media ${deviceBreakpoint.widescreen} {
    right: 2.5rem;
  }
`