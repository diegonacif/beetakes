// Hamburguer Menu Button with Animation
import { Twirl as Hamburguer } from 'hamburger-react';
import { useContext, useRef, useState } from 'react';
import { MenuButtonContainer } from './styles';

// Outside Click (Hook)
import { useOnClickOutside } from 'usehooks-ts'

// Conditional Rendering Transition Lib
import { useTransition, animated } from '@react-spring/web';
import { navData } from '../../constants/navData';
import { RefsContext } from '../../contexts/RefsProvider';
import { useNavigate } from 'react-router-dom';

export function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const navigate = useNavigate();

  // Outside Click (Variable)
  const refContainer = useRef(null);

  const handleClickOutside = () => {
    setIsMenuOpen(false);
  }

  useOnClickOutside(refContainer, handleClickOutside)

  const transitions = useTransition(isMenuOpen, {
    from: { x: 10, y: -10, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 10, y: -10, opacity: 0 },
    config: {duration: 200},
  });

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
  }

  return (
    <MenuButtonContainer
      onClick={() => handleMenuOpen()}
      ref={refContainer} // Outside Click (Reference)
    >
      <Hamburguer 
        toggled={isMenuOpen} 
        toggle={handleMenuOpen}
        size={30}
        duration={0.3}
        rounded
        label="abrir menu"
        color="#f9ce38"
      />

      {
        transitions(
          (styles, item) => item &&
            <animated.div className="menu-modal" style={styles}>
              {
                navData.map((item, index) => (
                  <div className="menu-item" key={index} >
                    {index === 1 && <hr />}
                    <span onClick={() => currentRef(item.ref)}>{item.text}</span>
                  </div>
                ))
              }
              <div className="menu-item">
                <span onClick={() => navigate('contact-form')}>Orçamento</span>
              </div>
            </animated.div>
        )
      }
    </MenuButtonContainer>
  )
}