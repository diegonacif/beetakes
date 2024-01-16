import styled from "styled-components";

export const VideoBannerContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 10rem;
  background-color: lightgray;
  overflow: hidden;
  position: relative;

  .video-wrapper {
    max-width: 100%;
    max-height: 100%;

  }
  #background-video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    z-index: 0;

    @media (orientation: portrait) {
      width: 100vw;
      max-height: 20rem;
    }

    @media (orientation: landscape) {
      min-width: 100vw;
      max-width: 100vw;
      height: auto;
      /* max-width: 50vw; */
    }
  }
`