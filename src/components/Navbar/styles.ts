import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 4rem;
  color: black;
  padding: 0 0.75rem;
  z-index: 10;

  background: linear-gradient(90deg, rgba(239,252,255,0.3) 0%, rgba(101,101,101,0.3) 50%, rgba(31,31,31,0.3) 100%);

  .logo-wrapper {
    display: flex;
    align-items: center;
    height: 100%;

    #bee-logo {
      height: 95%;
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