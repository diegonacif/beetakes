import { NavbarContainer } from "./styles";
import beeLogo from '../../assets/bee-logo-3.png';

export function Navbar() {
  return (
    <NavbarContainer>
      <div className="logo-wrapper">
        <img src={beeLogo} alt="bee takes logo" id="bee-logo" />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Sobre nós</li>
          <li>Serviços</li>
          <li>Contato</li>
        </ul>
      </nav>
    </NavbarContainer>
  ) 
}