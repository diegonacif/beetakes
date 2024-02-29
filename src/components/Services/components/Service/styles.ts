import styled from "styled-components";

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 23rem;
  width: 23rem;
  min-width: 23rem;
  color: ${(props) => props.theme['gray-600']};
  text-align: center;

  .service-image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 12rem;
    border-radius: 12px;
    overflow: hidden;
    filter: drop-shadow(2px 2px 6px ${(props) => props.theme['midnight-500']});
    transition: filter 0.3s ease-in-out;

    img {
      max-width: 100%;
    }

    &:hover {
      filter: drop-shadow(2px 2px 6px ${(props)=> props.theme['yellow-500']});
    }
  }

  h3 {
    margin-top: 1rem;
  }

  h5 {
    margin-top: 0.75rem;
  }
`;