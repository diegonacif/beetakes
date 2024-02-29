import styled from "styled-components";

export const BeeflixContainer = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme['gray-100']};
  padding: 2rem 0.75rem;

  #beeflix-title {
    text-align: center;
    color: ${(props) => props.theme['midnight-800']};
    font-family: "Kdam Thmor Pro", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2rem;
  }
`

export const BeeflixGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  background-color: ${(props) => props.theme['gray-100']};
  margin-top: 2rem;
`