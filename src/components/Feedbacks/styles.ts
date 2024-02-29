import styled from "styled-components";

export const FeedbacksContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  width: 100vw;
  max-width: 100vw;
  background-color: ${(props) => props.theme['gray-300']};
  padding: 2rem 0.75rem;
  overflow: hidden;

  #feedbacks-title {
    width: 100%;
    color: ${(props) => props.theme['gray-600']};
    text-align: center;
    font-family: "Kdam Thmor Pro", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2rem;
  }
`