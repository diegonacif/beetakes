import styled from "styled-components";

interface ContainerProps {
  $orientation: "landscape" | "portrait";
}

export const Container = styled.div<ContainerProps>`
  position: relative;

  width: 100%;

  aspect-ratio: ${({ $orientation }) =>
    $orientation === "portrait" ? "9 / 16" : "16 / 9"};

  overflow: hidden;

  background: #000;

  iframe {
    position: absolute;
    inset: 0;

    width: 100%;
    height: 100%;

    border: 0;
  }

  ${({ $orientation }) =>
    $orientation === "portrait" &&
    `
      max-width: 405px;
      margin: 0 auto;
    `}
`;