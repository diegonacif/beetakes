import styled from "styled-components";

export const WhyUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 2rem 0.75rem;
  background-color: ${(props) => props.theme['midnight-800']};
  overflow: hidden;

  #whyus-title {
    color: ${(props) => props.theme['yellow-500']};
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
    text-align: center;
  }
`

export const WhyUsTextWrapper = styled.div`
  width: fit-content;
  max-width: 45rem;
  background-color: ${(props) => props.theme['gray-100']};
  /* background-color: ${(props) => props.theme['yellow-500']}; */
  padding: 0.75rem;
  border-radius: 8px;
  margin-top: 1rem;
`

export const CheckboxCircle = styled.div`
  position: relative;
  display: flex;
  /* justify-content: center;
  align-items: center; */

  svg {
    z-index: 10;
    color: ${(props) => props.theme['midnight-800']};
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    background-color: ${(props) => props.theme['yellow-500']};
    z-index: 5;
  }
`

export const WhyUsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: black;

  &:not(:first-child) {
    margin-top: 0.75rem;
  }
`