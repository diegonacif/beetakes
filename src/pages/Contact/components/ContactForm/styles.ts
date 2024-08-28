import styled from "styled-components";
import * as Checkbox from "@radix-ui/react-checkbox";
import { deviceBreakpoint } from "../../../../styles/breakpoints";

export const ContactFormContainer = styled.main`
  padding: 4.5rem .75rem 1.5rem;
  background-color: ${(props) => props.theme['gray-100']};
  min-height: 100dvh;

  h2 {
    font-family: "Kdam Thmor Pro", sans-serif;
    font-size: 1.375rem;
    color: ${(props) => props.theme['gray-600']};
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    button[type="submit"] {
      font-family: "Kdam Thmor Pro", sans-serif;
      background-color: ${(props) => props.theme['yellow-500']};
      border: 0;
      border-radius: 4px;
      width: max-content;
      padding: .25rem .75rem;
      margin: 1.5rem auto 0;
      cursor: pointer;
      
      &:disabled {
        background-color: ${(props) => props.theme['gray-400']};
        color: ${(props) => props.theme['gray-100']};
        cursor: not-allowed;
      }
    }
  }

  @media ${deviceBreakpoint.tablet} {
    padding: 4.5rem 1rem 1.5rem;
  }

  @media ${deviceBreakpoint.notebook} {
    padding: 4.5rem 1.25rem 1.5rem;
  }

  @media ${deviceBreakpoint.desktop} {
    padding: 4.5rem  2rem 1.5rem;
  }

  @media ${deviceBreakpoint.widescreen} {
    padding: 4.5rem 2.5rem 1.5rem;
  }
`

export const ContactFormInputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 25rem;
  height: max-content;
  margin: 0 auto;
  
  #terms-text {
    color: ${(props) => props.theme['gray-600']};
    margin-left: 1.5rem;
  }

  &:not(:first-of-type) {
    margin-top: 1.5rem;
  }
`

export const ContactFormTextArea = styled.textarea`
  width: 100%;
  min-height: 5.5rem;
  height: max-content;
  padding: 1rem .5rem .25rem;
  border: 2px solid ${(props) => props.theme['gray-300']};
  border-radius: 5px;
  resize: none;

  transition: border 0.2s;

  &:focus-visible {
    outline: 0;
    border: 2px solid ${({ theme }) => theme['gray-500']};

    transition: border 0.3s;
  }  

  &#error {
    border: 2px solid ${({ theme }) => theme['error']};
  }
`

export const ContactFormInput = styled.input`
  width: 100%;
  padding: 1rem .5rem .25rem;
  border: 2px solid ${(props) => props.theme['gray-300']};
  border-radius: 5px;

  transition: border 0.2s;

  &:focus-visible {
    outline: 0;
    border: 2px solid ${({ theme }) => theme['gray-500']};

    transition: border 0.3s;
  }  

  &#error {
    border: 2px solid ${({ theme }) => theme['error']};
  }
`

export const ContactFormLabel = styled.label`
  position: absolute;
  top: -.55rem;
  left: .45rem;

  font-size: 0.875rem;
  color: ${(props) => props.theme['white']};

  background-color: ${(props) => props.theme['gray-400']}; 
  border-radius: 4px;
  padding: .125rem .375rem;
`

export const ContactFormCheckboxContainer = styled(Checkbox.Root)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme['gray-300']};
  background-color: ${(props) => props.theme['white']};
  padding-right: 2px;
  width: 1rem;
  min-width: 1rem;
  height: 1rem;
  border-radius: 4px;

  .checkbox-indicator {
    position: relative;
    top: .12rem;
    left: -.125rem;
    color: ${(props) => props.theme['gray-700']};

    svg {
      width: 150%;
      height: 150%;
    }
  }
`

export const ContactFormCharacterCounter = styled.span`
  position: absolute;
  bottom: -.95rem;
  right: .5rem;

  font-size: 0.675rem;
  font-weight: 500;

  color: ${(props) => props.theme['gray-400']};
`