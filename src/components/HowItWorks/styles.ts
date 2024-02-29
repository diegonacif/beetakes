import styled from "styled-components";
import orderImg from "../../assets/purpose.svg";
import droneImg from "../../assets/simple-drone.svg";
import thumbsUpImg from "../../assets/1608950_thumbs_up_icon.svg";
import talkImg from "../../assets/ico-talk.png";

interface ProtocolStepProps {
  step: string;
}

export const HowItWorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 1.5rem 0;
  background-color: ${(props) => props.theme['midnight-800']};

  h1 {
    text-align: center;
    font-family: "Kdam Thmor Pro", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2rem;
  }

  .step-wrapper {
    position: relative;
    display: flex;
    max-width: 95vw;
    gap: 0.25rem;
    margin: 0 auto;
    padding: 1.5rem 0;
    overflow-x: auto;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }

    .next-arrow {
      width: 3rem;
      height: 1rem;
      margin-top: 2.5rem;
    }
  }
`

export const ProtocolStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 10rem;
  min-width: 10rem;
  gap: 0.75rem;

  p {
    text-align: center;
  }
`

export const ProtocolStepCircle = styled.div<ProtocolStepProps>`
  position: relative;
  display: flex;
  width: 5rem;
  height: 5rem;
  border-radius: 9999px;
  background-color: #ffd034;

  background-image: url(
    ${
      (props) => props.step === 'firstContact' ? talkImg :
      props.step === 'contract' ? orderImg :
      props.step === 'execution' ? droneImg :
      props.step === 'deliver' ? thumbsUpImg :
      droneImg
    }
  );
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 50%;

  #step-number {
    position: absolute;
    top: 0;
    left: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.125rem;
    height: 1.125rem;
    transform: translate(-50%, -50%);
    background-color: #ffd034;
    color: #222222;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 9999px;
    outline: 1px solid black;
    overflow: hidden;
  }
`