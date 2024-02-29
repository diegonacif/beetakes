import styled from "styled-components";
import bgImg from "../../assets/IMG_5531.jpg";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
  height: 100%;
  width: 100vw;
  max-width: 100vw;
  overflow: hidden;

  /* h2 {
    font-weight: 500;
    font-size: 1.375rem;
    text-align: center;
    margin-top: -2rem;
    padding: 0 2rem;
  } */
`

export const IntroBanner = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  h1 {
    font-size: 1.875rem;
    margin-top: 21vh;
  }

  h2 {
    font-size: 1.25rem;
    margin-top: 26vh;
  }

  .intro-text {
    font-weight: 600;
    text-align: center;
    color: ${(props) => props.theme['gray-100']};
    text-shadow: 1px 1px 2px ${(props) => props.theme['gray-600']};
    z-index: 10;
    padding: 0 1rem;
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
  
`
