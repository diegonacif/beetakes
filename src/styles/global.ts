import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-tap-highlight-color: transparent; // remove color highlight on tap

    a {
        text-decoration: none;
        color: inherit;
        &:focus-visible, &:focus-within, &:focus, &:active, &:target {
          border: 0;
          outline: 0;
          background-color: transparent;
        }
      }
  }

  body {
    color: ${(props) => props.theme['gray-300']};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`