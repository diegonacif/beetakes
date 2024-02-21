// Hamburguer Menu Button with Animation
import { Twirl as Hamburguer } from 'hamburger-react';
import { useRef, useState } from 'react';
import { MenuButtonContainer } from './styles';

// Outside Click (Hook)
import { useOnClickOutside } from 'usehooks-ts'

// Conditional Rendering Transition Lib
import { useTransition, animated } from '@react-spring/web';

export function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  }

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
              <div className="menu-item">
              <a href='#section-home'>Início</a>
              </div>
              <hr />
              <div className="menu-item">
                <a href='#section-services'>Serviços</a>
              </div>
              <div className="menu-item">
                <a href='#section-feedbacks'>Feedbacks</a>
              </div>
              <div className="menu-item">
                <a href='#section-folio'>Portifólio</a>
              </div>
              <div className="menu-item">
                <a href='#section-aboutus'>Sobre Nós</a>
              </div>
            </animated.div>
        )
      }
    </MenuButtonContainer>
  )
}