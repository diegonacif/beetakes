import styled from "styled-components";
import img from "../../assets/star.svg";
import { deviceBreakpoint } from "../../styles/breakpoints";

export const CertifiedContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 100vw;
  background-color: ${(props) => props.theme['gray-100']};
  padding: 2rem 0.75rem 8rem;
  
  @media ${deviceBreakpoint.notebook} {
    flex-wrap: nowrap;
  }
`

export const CertifiedInfo = styled.div`
  background-color: ${(props) => props.theme['gray-300']};
  padding: 1.25rem 1rem;
  border-radius: 8px;
  height: fit-content;

  #certified-title {
    font-family: "Kdam Thmor Pro", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: center;
    font-size: 1.375rem;
    color: ${(props) => props.theme['midnight-800']};
  }

  .certified-info-rows {
    margin-top: 1rem;
  }
`

export const CertifiedRows = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme['midnight-800']};
  font-size: 1.0625rem;

  &::before {
    content: "";
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;

    background-image: url(${img});
    background-size: contain;
    background-repeat: no-repeat;
  }


  &:not(:first-child) {
    margin-top: .75rem;
  }
`

export const CertifiedLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: max-content;

  img {
    max-width: 20rem;

    &#anac-logo {
      width: 5rem;
      object-fit: contain;
    }
    &#decea-logo {
      width: 4rem;
      object-fit: contain;
    }
    &#anatel-logo {
      width: 4.25rem;
      object-fit: contain;

    }
    &#mapfre-logo {
      width: 7.5rem;
      object-fit: contain;
    }

    @media ${deviceBreakpoint.notebook} {
      &#anac-logo {
      width: 10rem;
      object-fit: contain;
      }
      &#decea-logo {
        width: 8rem;
        object-fit: contain;
      }
      &#anatel-logo {
        width: 8.5rem;
        object-fit: contain;

      }
      &#mapfre-logo {
        width: 15rem;
        object-fit: contain;
      }
    }
  }
`