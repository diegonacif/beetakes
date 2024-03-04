import styled from "styled-components";
import { deviceBreakpoint } from "../../styles/breakpoints";

export const WhatsappButtonContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  right: .75rem;
  bottom: 1.25rem;
  width: 4rem;
  height: 4rem;
  background: rgb(60,156,69);
  background: linear-gradient(234deg, rgba(60,156,69,1) 0%, rgba(26,122,41,1) 100%);
  border-radius: 9999px;
  transition: filter 0.3s, width 0.3s, right 0.3s;
  filter: opacity(0.85);
  overflow: hidden;
  z-index: 15;
  cursor: pointer;

  svg {
    position: relative;
    bottom: 1px;
    left: 1px;
    color: ${(props) => props.theme['gray-100']};
  }
  
  #speak-with-us {
    font-weight: bold;
    color: ${(props) => props.theme['gray-100']};
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
      width: 12rem;
      
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