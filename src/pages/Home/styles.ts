import styled from "styled-components";
import bgImg from "../../assets/IMG_5531.jpg";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
  height: 100%;

  h2 {
    font-weight: 500;
    font-size: 1.375rem;
    text-align: center;
    margin-top: -2rem;
    padding: 0 2rem;
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    margin-top: auto;

    span {
      color: ${(props) => props.theme['gray-500']};
      cursor: pointer;
    }
  }
`

export const IntroBanner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

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
    filter: blur(5px);
    z-index: 5;
    transform: scale(1.1);
  }
  
`
