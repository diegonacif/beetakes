import styled from "styled-components";
import { deviceBreakpoint } from "../../../../styles/breakpoints";

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 23rem;
  width: 23rem;
  min-width: 23rem;

  color: ${(props) => props.theme['gray-600']};
  background-color: ${(props) => props.theme['gray-100']};
  border-radius: 15px;
  overflow: hidden;
  text-align: center;

  .service-image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97%;
    height: 12rem;
    margin-top: 6px;
    border-radius: 12px;
    overflow: hidden;
    /* filter: drop-shadow(2px 2px 6px ${(props) => props.theme['midnight-500']}); */
    transition: filter 0.3s ease-in-out;

    img {
      max-width: 100%;
    }

    @media ${deviceBreakpoint.notebook} {
      &:hover {
        filter: drop-shadow(2px 2px 6px ${(props)=> props.theme['yellow-500']});
      }
    }
  }

  h3 {
    margin-top: .75rem;
    font-weight: 500;
    font-size: 1.375rem;
  }

  #saiba-mais-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2.75rem;
    background: linear-gradient(180deg, rgba(249,206,56,1) 0%, rgba(167,137,32,1) 100%);
    margin-top: 0.5rem;
  }

  span {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${(props) => props.theme['gray-700']};
    font-family: "Kdam Thmor Pro", sans-serif;
  }  
`;