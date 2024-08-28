import styled from "styled-components";

export const SuccessSubmissionContainer = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  overflow: hidden;

  h1 {
    z-index: 10;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    filter: blur(5px) brightness(0.6);
    z-index: 5;
    transform: scale(1.1);
  }

  #message {
    position: relative;
    display: flex;
    flex-direction: column;

    margin-top: 1rem;
    padding: 1.5rem 1rem;
    background-color: ${(props) => props.theme['gray-100']};
    width: 90%;
    max-width: 19.75rem;
    height: max-content;
    border-radius: 12px;

    z-index: 10;

    strong {
      font-weight: 500;
    }

    span {
      color: ${(props) => props.theme['gray-600']};
      font-size: 1.25rem;

      &~span {
        margin-top: 1rem;
      }
    }

    #crazyBee {
      width: 50%;
      margin: 0 auto;
    }

    #ok {
      font-family: "Kdam Thmor Pro", sans-serif;
      background-color: ${(props) => props.theme['yellow-500']};
      border: 1px solid ${(props) => props.theme['gray-600']};
      border-radius: 6px;
      width: max-content;
      padding: .25rem .75rem;
      margin: 1.5rem auto 0;
      cursor: pointer;
    }
  }
`