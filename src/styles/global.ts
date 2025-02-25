import { createGlobalStyle } from 'styled-components'
import KdamThmorProRegularTtf from '../assets/fonts/KdamThmorPro-Regular.ttf';
import UbuntuBoldTtf from '../assets/fonts/Ubuntu-Bold.ttf';
import UbuntuMediumTtf from '../assets/fonts/Ubuntu-Medium.ttf';
import UbuntuRegularTtf from '../assets/fonts/Ubuntu-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: 'Kdam Thmor Pro';
    src: url(${KdamThmorProRegularTtf}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuRegularTtf}) format('truetype');
    font-weight: 400; // Regular
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuMediumTtf}) format('truetype');
    font-weight: 500; // Medium
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuBoldTtf}) format('truetype');
    font-weight: 700; // Bold
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-tap-highlight-color: transparent; // remove color highlight on tap

    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;

    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    font-style: normal;


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
    overflow-x: hidden;

    /* Works on Chrome, Edge, and Safari */
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: gray;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #fece35;
      border-radius: 8px;
      border: 1px solid gray;
    }

    /* Works on Firefox */
    scrollbar-width: thin;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`