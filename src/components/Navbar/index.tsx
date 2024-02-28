import { NavbarContainer } from "./styles";
import beeLogo from '../../assets/bee-logo-3.png';
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { MenuButton } from "../MenuButton";
import { useContext, useEffect, useState } from "react";
import { navData } from "../../constants/navData";
import { RefsContext } from "../../contexts/RefsProvider";

export function Navbar() {
  const breakpoint = useBreakpoint();

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

  const { homeRef, servicesRef, packsRef, feedbacksRef, beeflixRef } = useContext(RefsContext);

  const refsMap: Record<string, React.MutableRefObject<HTMLElement | null>> = {
    homeRef,
    servicesRef,
    packsRef,
    feedbacksRef,
    beeflixRef,
  };

  function currentRef(ref: string) {
    const selectedRef = refsMap[ref];

    if (selectedRef) {
      const navbarHeight = 48;
      const offset = selectedRef.current?.getBoundingClientRect().top;

      if (offset !== undefined) {
        window.scrollTo({
          top: window.scrollY + offset - navbarHeight,
          behavior: 'smooth',
        });
      }
    }

    // if (selectedRef) {
    //   selectedRef.current?.scrollIntoView({
    //     behavior: 'smooth'
    //   });
    // }
  }

  return (
    <NavbarContainer color={navColor}>
      <div className="logo-wrapper">
        <img src={beeLogo} alt="bee takes logo" id="bee-logo" />
      </div>
      {
        breakpoint === 'mobile' || breakpoint === 'tablet' ?
        <MenuButton /> :
        null
      }
      { breakpoint === 'notebook' || breakpoint === 'desktop' || breakpoint === 'widescreen' ?
        <nav>
          <ul>
            {
              navData.map((item, index) => (
                <li key={index} onClick={() => currentRef(item.ref)}>{item.text}</li>
              ))
            }
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