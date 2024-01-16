import styled from "styled-components";

export const YoutubeEmbedContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 10rem;
  width: 100vw;
  overflow: hidden;
  z-index: 0;

  iframe {
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-24%);
    height: 100%;
    width: 100%;
    min-height: 10rem;
    border: 0;
  }

  .iframe-cover {
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-25%);
    height: 100%;
    width: 100%;
    min-height: 10rem;
    border: 0;
  }
`