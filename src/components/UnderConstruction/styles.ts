import styled from "styled-components";
import bgImg from "../../assets/IMG_5531.jpg";

export const UnderConstructionContainer = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  /* background-image: url(/src/assets/under-construction-bg.jpg);
  background-size: cover; */
  z-index: 10;

  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 10;

    height: 100%;
    overflow-y: auto;

    #back-btn {
      position: absolute;
      top: 1rem;
      left: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.375rem;
      width: fit-content;
      margin-top: 1rem;
      margin-left: 0.75rem;
      background-color: transparent;
      border: none;
      border-radius: 5px;
      color: white;
      cursor: pointer;

      img {
        width: 0.675rem;
        transform: rotate(180deg);
      }
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100dvh;
      width: 100vw;
      padding: 4rem 0.75rem 0 0.75rem;
      overflow-y: auto;
      
      img {
        width: 10rem;
      }
      
      h2 {
        font-size: 1.5rem;
        text-align: center;
        color: ${(props) => props.theme['gray-100']};
        margin-top: 3rem;
      }

      .contact-us-wrapper {
        display: flex;
        gap: 0.5rem;
        margin-top: 12rem;
        cursor: pointer;

        span {
          font-size: 1.25rem;
        }

        img {
          width: 1.325rem;
        }
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

    }
  }

  .bg {
    position: fixed;
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

  .overlay {
    background-image: none;
    background-color: #000;
    opacity: 0.8;
  }

`
