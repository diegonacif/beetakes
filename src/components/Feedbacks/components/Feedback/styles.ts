import styled from "styled-components";

export const FeedBackContainer = styled.div`
  width: 28rem;
  max-width: 100%;
  /* background-color: ${(props) => props.theme['gray-300']}; */

  .upper-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;

    #star-img {
      width: 1.75rem;
      height: auto;
    }
  }

  .lower-section {
    display: flex;
    width: 100%;
    gap: 1.25rem;
    background-color: ${(props) => props.theme['gray-100']};
    border-radius: 0 0 8px 8px;
    padding: 0 1.5rem 1rem;
  }
`
export const FeedBackText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.5;
  width: 100%;
  height: fit-content;
  padding: 1.75rem;
  color: ${(props) => props.theme['gray-600']};
  background-color: ${(props) => props.theme['gray-100']};
  border-radius: 8px 8px 0 0;

  /* &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 20px 20px 0 20px;
    border-style: solid;
    border-color: ${(props) => props.theme['gray-100']} transparent transparent transparent;
  } */
`
export const FeedBackPhoto = styled.img`
  width: 4.5rem;
  min-width: 4.5rem;
  height: 4.5rem;
  border-radius: 9999px;
  overflow: hidden;
  filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.3))
`
export const FeedBackStars = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0 0.25rem;
`
export const FeedBackInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: black;
`