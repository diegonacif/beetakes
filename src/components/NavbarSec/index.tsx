import { NavbarSecContainer } from "./styles";
import beeLogo from '../../assets/bee-logo-3.png';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function NavbarSec() {

  // Navbar color //
  const [navColor, setNavColor] = useState('gradient');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setNavColor('solid');
      } else {
        setNavColor('gradient');
      }
    });
  }, [])

  return (
    <NavbarSecContainer color={navColor}>
      <div className="logo-wrapper">
        <img src={beeLogo} alt="bee takes logo" id="bee-logo" />
      </div>
      
      <nav>
        <ul>
          <Link to="/">
            <li onClick={() => console.log("go back")}>Sair</li>
          </Link>
        </ul>
      </nav>
    </NavbarSecContainer>
  ) 
}