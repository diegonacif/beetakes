import styled from "styled-components";
import bgImg from "../../assets/IMG_5531.jpg";

export const AdmLoginContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100dvh;
  background-image: url(${bgImg});
  background-size: contain;
  background-repeat: no-repeat;

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

  h2 {
    text-align: center;
    color: ${(props) => props.theme['midnight-800']};
    font-family: "Kdam Thmor Pro", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2rem;
    z-index: 10;
  }
  
  form {
    position: relative;
    display: flex;
    flex-direction: column;

    margin-top: 1rem;
    padding: 1.5rem 1rem;
    background-color: rgba(255, 255, 255, 0.45);
    width: max-content;
    height: max-content;
    border-radius: 12px;

    z-index: 10;

    input {
      padding: .25rem .5rem;
      border: 0;
      border-radius: 4px;

      &:first-of-type {
        margin-top: 1rem;
      }

      &:focus-visible {
        outline: 1px solid ${(props) => props.theme['yellow-500']}
      }
    }

    input~input {
      margin-top: .75rem;
    }

    button {
      width: max-content;
      margin: 1.25rem auto 0;
      padding: .5rem 1rem;
      font-family: 'Ubuntu', sans-serif;
      font-size: 1rem;
      font-weight: 500;
      color: ${(props) => props.theme['gray-700']};
      border-radius: 12px;
      border: 0;
      background: linear-gradient(180deg, rgba(249,206,56,1) 0%, rgba(167,137,32,1) 100%);
      z-index: 10;
      cursor: pointer;
    }
  }
`