import styled from "styled-components";
import { deviceBreakpoint } from "../../styles/breakpoints";

export const FooterContainer = styled.footer`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100vw;
  background-color: ${(props) => props.theme['midnight-800']};
  padding: 1.5rem 0.75rem 5rem;

  

  #beelogo-footer {
    width: 15rem;
  }
`;

export const FooterInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem;
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  background-color: ${(props) => props.theme['midnight-800']};
`

export const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  svg {
    color: ${(props) => props.theme['yellow-500']};
    transition: filter 0.3s, color 0.3s;
    cursor: pointer;
    
    @media ${deviceBreakpoint.notebook} {
      &:hover {
        filter: drop-shadow(1px 1px 6px ${(props)=> props.theme['yellow-500']});

        &#whatsapp-logo {
          filter: drop-shadow(1px 1px 5px #3c9c46);
          color: #3c9c46;
        }

        &#instagram-logo {
          filter: drop-shadow(3px 3px 3px #fa8225) drop-shadow(0px 0px 4px #912eb9) drop-shadow(-3px -3px 3px #5560d6);
          color: #e1e1e6;
        }

        &#facebook-logo {
          filter: drop-shadow(1px 1px 5px #096cf8);
          color: #096cf8;
        }
        
        &#tiktok-logo {
          filter: drop-shadow(2px 2px 3px #08f2eb) drop-shadow(-2px -2px 3px #fe2f5d);
          color: #e1e1e6;
        }

        &#mail-logo {
          filter: drop-shadow(1px 1px 5px #e1e1e6);
          color: #e1e1e6;
        }
      }

    }
  }
`;

export const FooterFoot = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 3.5rem;

  #rights-reserved {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-500']};
    cursor: default;
  }

  #developed-by {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-500']};
    cursor: pointer;
  }
`