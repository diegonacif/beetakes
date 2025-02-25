import styled from "styled-components";
import bgImg from "../../assets/IMG_5531_1080.jpg";
import { deviceBreakpoint } from "../../styles/breakpoints";
import customCursor from "../../assets/cursor/Normal-Select-y.png";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
  height: 100%;
  width: 100vw;
  max-width: 100vw;
  overflow: hidden;

  cursor: url(${customCursor}), auto;
`

// export const IntroBanner = styled.section`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   width: 100vw;
//   overflow: hidden;

//   .intro-logo {
//     position: absolute;
//     top: 11vh;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 11rem;
//     z-index: 10;
//     opacity: 0.9;
//     transition: top 0.4s, width 0.4s;
//   }

//   .intro-overtext {
//     font-family: "Kdam Thmor Pro", sans-serif;
//     font-weight: 400;
//     font-style: normal;
//     font-size: 1.25rem;
//     margin-top: 40vh;
//     text-align: center;
//     color: ${(props) => props.theme['gray-100']};
//     text-shadow: 1px 1px 2px ${(props) => props.theme['gray-600']};
//     z-index: 10;
//     padding: 0 0.5rem;
//     transition: font-size 0.4s, margin-top 0.4s;
//   }

//   .intro-text {
//     font-family: "Kdam Thmor Pro", sans-serif;
//     font-weight: 400;
//     font-style: normal;
//     font-size: 2.25rem;
//     margin-top: 0;
//     text-align: center;
//     color: ${(props) => props.theme['yellow-500']};
//     text-shadow: 1px 1px 2px ${(props) => props.theme['gray-600']};
//     filter: drop-shadow(2px 2px 14px ${(props) => props.theme['midnight-800']});
//     z-index: 10;
//     padding: 0 0.5rem;
//     transition: font-size 0.4s, margin-top 0.4s;
//   }

//   .intro-subtext {
//     /* font-family: "Kdam Thmor Pro", sans-serif; */
//     font-weight: 400;
//     font-style: normal;
//     font-size: 0.875rem;
//     margin-top: 1.5rem;
//     text-align: center;
//     color: ${(props) => props.theme['gray-100']};
//     text-shadow: 1px 1px 2px ${(props) => props.theme['gray-600']};
//     z-index: 10;
//     padding: 0 0.5rem;
//     transition: font-size 0.4s, margin-top 0.4s;
//   }
  
//   .bg {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-image: url(${bgImg});
//     background-size: cover;
//     background-position: center center;
//     background-repeat: no-repeat;
//     filter: blur(5px) brightness(0.6);
//     z-index: 5;
//     transform: scale(1.1);
//   }
  
//   @media ${deviceBreakpoint.tablet} {
//     .intro-overtext {
//       font-size: 1.75rem;
//       margin-top: 40vh;
//     }
//     .intro-text {
//       font-size: 3.5rem;
//       margin-top: 0;
//       color: ${(props) => props.theme['yellow-500']};
//       filter: drop-shadow(2px 2px 14px ${(props) => props.theme['midnight-800']} )
//     }
//     .intro-subtext {
//       font-size: 1rem;
//       margin-top: 2rem;
//     }
//   }

//   @media ${deviceBreakpoint.notebook} {
//     .intro-overtext {
//       font-size: 2rem;
//       margin-top: 38vh;
//     }
//     .intro-text {
//       font-size: 4rem;
//       margin-top: 0;
//       color: ${(props) => props.theme['yellow-500']};
//       filter: drop-shadow(2px 2px 14px ${(props) => props.theme['midnight-800']} )
//     }
//     .intro-subtext {
//       font-size: 1.125rem;
//       margin-top: 2rem;
//     }
//   }

//   @media ${deviceBreakpoint.desktop} {
//     .intro-overtext {
//       font-size: 2.5rem;
//       margin-top: 34vh;
//     }
//     .intro-text {
//       font-size: 5rem;
//       margin-top: 0;
//       color: ${(props) => props.theme['yellow-500']};
//       filter: drop-shadow(2px 2px 14px ${(props) => props.theme['midnight-800']} )
//     }
//     .intro-subtext {
//       font-size: 1.5rem;
//       margin-top: 2rem;
//     }
//   }

//   @media ${deviceBreakpoint.widescreen} {
//     .intro-logo {
//       top: 8.5vh;
//       width: 11rem;
//     }

//     .intro-overtext {
//       font-size: 3rem;
//       margin-top: 31vh;
//     }
//     .intro-text {
//       font-size: 6rem;
//       margin-top: 0;
//       color: ${(props) => props.theme['yellow-500']};
//       filter: drop-shadow(2px 2px 14px ${(props) => props.theme['midnight-800']} )
//     }
//     .intro-subtext {
//       font-size: 1.75rem;
//       margin-top: 2rem;
//     }
//   }

//   @media (max-height: 660px) {
//     .intro-logo {
//       transform: translateX(-50%) scale(0.8);
//       top: 9vh 
//     }
//   }

//   @media (max-height: 660px) and (max-width: 600px) {
//     .intro-logo {
//       transform: translateX(-50%) scale(0.75);
//       top: 9.5vh 
//     }
//   }

//   @media (max-height: 380px) and (orientation: landscape) {
//     .intro-logo {
//       transform: translateX(-50%) scale(0.4);
//       top: 0;
//     }
//   }
// `

export const IntroBanner = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .intro-logo {
    position: absolute;
    top: 11vh;
    left: 50%;
    transform: translateX(-50%);
    width: 11rem;
    height: auto;
    z-index: 10;
    opacity: 0.9;
    transition: top 0.4s, width 0.4s;
  }

  .intro-overtext {
    font-family: "Kdam Thmor Pro", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.25rem;
    margin-top: 40vh;
    text-align: center;
    color: ${(props) => props.theme['gray-100']};
    text-shadow: 1px 1px 2px ${(props) => props.theme['gray-600']};
    z-index: 10;
    padding: 0 0.5rem;
    transition: font-size 0.4s, margin-top 0.4s;
  }

  .intro-text {
    font-family: "Kdam Thmor Pro", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2.25rem;
    margin-top: 0;
    text-align: center;
    color: ${(props) => props.theme['yellow-500']};
    text-shadow: 1px 1px 2px ${(props) => props.theme['gray-600']};
    /* filter: drop-shadow(2px 2px 14px ${(props) => props.theme['midnight-800']}); */
    z-index: 10;
    padding: 0 0.5rem;
    transition: font-size 0.4s, margin-top 0.4s;
    filter: none;
    isolation: isolate;
  }

  .intro-subtext {
    /* font-family: "Kdam Thmor Pro", sans-serif; */
    font-weight: 400;
    font-style: normal;
    font-size: 0.875rem;
    margin-top: 1.5rem;
    text-align: center;
    color: ${(props) => props.theme['gray-100']};
    text-shadow: 1px 1px 2px ${(props) => props.theme['gray-600']};
    z-index: 10;
    padding: 0 0.5rem;
    transition: font-size 0.4s, margin-top 0.4s;
  }
  
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bgImg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    filter: blur(5px) brightness(0.6);
    z-index: 5;
    transform: scale(1.1);
  }
  
  @media ${deviceBreakpoint.tablet} {
    .intro-overtext {
      font-size: 1.75rem;
      margin-top: 40vh;
    }
    .intro-text {
      font-size: 3.5rem;
      margin-top: 0;
      /* color: ${(props) => props.theme['yellow-500']};
      filter: drop-shadow(2px 2px 14px ${(props) => props.theme['midnight-800']} ) */
    }
    .intro-subtext {
      font-size: 1rem;
      margin-top: 2rem;
    }
  }

  @media ${deviceBreakpoint.notebook} {
    .intro-overtext {
      font-size: 2rem;
      margin-top: 38vh;
    }
    .intro-text {
      font-size: 4rem;
      margin-top: 0;
      /* color: ${(props) => props.theme['yellow-500']};
      filter: drop-shadow(2px 2px 14px ${(props) => props.theme['midnight-800']} ) */
    }
    .intro-subtext {
      font-size: 1.125rem;
      margin-top: 2rem;
    }
  }

  @media ${deviceBreakpoint.desktop} {
    .intro-overtext {
      font-size: 2.5rem;
      margin-top: 34vh;
    }
    .intro-text {
      font-size: 5rem;
      margin-top: 0;
      /* color: ${(props) => props.theme['yellow-500']};
      filter: drop-shadow(2px 2px 14px ${(props) => props.theme['midnight-800']} ) */
    }
    .intro-subtext {
      font-size: 1.5rem;
      margin-top: 2rem;
    }
  }

  @media ${deviceBreakpoint.widescreen} {
    .intro-logo {
      top: 8.5vh;
      width: 11rem;
    }

    .intro-overtext {
      font-size: 3rem;
      margin-top: 31vh;
    }
    .intro-text {
      font-size: 6rem;
      margin-top: 0;
      /* color: ${(props) => props.theme['yellow-500']};
      filter: drop-shadow(2px 2px 14px ${(props) => props.theme['midnight-800']} ) */
    }
    .intro-subtext {
      font-size: 1.75rem;
      margin-top: 2rem;
    }
  }

  @media (max-height: 660px) {
    .intro-logo {
      transform: translateX(-50%) scale(0.8);
      top: 9vh 
    }
  }

  @media (max-height: 660px) and (max-width: 600px) {
    .intro-logo {
      transform: translateX(-50%) scale(0.75);
      top: 9.5vh 
    }
  }

  @media (max-height: 380px) and (orientation: landscape) {
    .intro-logo {
      transform: translateX(-50%) scale(0.4);
      top: 0;
    }
  }
`
