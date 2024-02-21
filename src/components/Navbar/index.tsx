import { NavbarContainer } from "./styles";
import beeLogo from '../../assets/bee-logo-3.png';
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { MenuButton } from "../MenuButton";

export function Navbar() {
  const breakpoint = useBreakpoint();

  return (
    <NavbarContainer>
      <div className="logo-wrapper">
        <img src={beeLogo} alt="bee takes logo" id="bee-logo" />
      </div>
      {
        breakpoint === 'mobile' || breakpoint === 'tablet' ?
        <MenuButton /> :
        null
      }
      { breakpoint === 'notebook' || breakpoint === 'desktop' ?
        <nav>
          <ul>
            <li>Home</li>
            <li>Sobre nós</li>
            <li>Serviços</li>
            <li>Contato</li>
          </ul>
        </nav> :
        null
      }
      { breakpoint === 'loading' ?
        <span>Loading</span>:
        null
      }
    </NavbarContainer>
  ) 
}