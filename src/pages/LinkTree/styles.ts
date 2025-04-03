import styled from "styled-components";
import logoImg from "../../assets/bee-logo.png";
import { deviceBreakpoint } from "../../styles/breakpoints";

interface LTButtonProps {
  color?: 'yellow' | null;
}

export const LinkTreeContainer = styled.main`
  height: 100dvh;
  max-height: 100dvh;
  width: 100vw;
  max-width: 100vh;
  overflow: hidden;

  @media ${deviceBreakpoint.tablet} {
    margin: 0 auto;
  }
`

export const LTHeader = styled.section`
  position: relative;
  height: 22.5vh;
  background-color: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme['gray-800']};

  #imgWrapper {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    border-radius: 9999px;

    width: 9rem;
    height: 9rem;
    overflow: hidden;
    background-image: url(${logoImg});
    background-size: cover;
    background-position: center center;
  }
`

export const LTBody = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  height: calc(100dvh - 22.5dvh);

  h1 {
    text-align: center;
  }
  h2 {
    text-align: center;
    font-size: .75rem;
    margin-top: .25rem;
  }
`

export const LTButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  width: 100%;
`

export const LTButton = styled.button<LTButtonProps>`
  width: 14rem;
  height: 2.5rem;
  background-color: white;
  border: none;
  border-radius: 20px;
  color: ${(props) => props.theme['gray-900']};
  font-weight: 500;

  background-color: ${(props) => 
    props.color === 'yellow' ?
    props.theme['yellow-500']:
    props.theme['gray-100']}
  ;  

  & + button {
    margin-top: 1.25rem;
  }
`

export const LTSubtitle = styled.div`
  padding: 0 3rem;
  font-size: .875rem;
  text-align: center;
  margin-top: 2rem;
`

export const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: auto 0 2rem;

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

export const LTFooterBar = styled.div`
  width: 100%;
  height: 1rem;
  background-color: ${(props) => props.theme['yellow-500']};
`