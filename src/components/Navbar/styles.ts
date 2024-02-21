import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 3rem;
  color: black;
  padding: 0 0.75rem;
  z-index: 20;

  background: ${(props) => props.color === 'gradient' ?
  'linear-gradient(90deg, rgba(239,252,255,0.3) 0%, rgba(101,101,101,0.3) 50%, rgba(31,31,31,0.3) 100%)' :
  'linear-gradient(90deg, rgba(126,129,130,0.97) 0%, rgba(101,101,101,0.97) 50%, rgba(31,31,31,0.97) 100%)'
  };  

  .logo-wrapper {
    display: flex;
    align-items: center;
    height: 100%;

    #bee-logo {
      height: 90%;
    }
    
  }

  nav {
    color: white;

    ul {
      display: flex;
      list-style-type: none;
      gap: 0.5rem;

      li {
        cursor: pointer;
      }
    }
  }

`