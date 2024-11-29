import styled from "styled-components";
import { deviceBreakpoint } from "../../../../styles/breakpoints";

interface SampleVideoContainerProps {
  windowWidth: number;
}

const videoWidthTablet = 35;
const videoHeightTablet = (videoWidthTablet*9)/16;

export const SampleVideoContainer = styled.div<SampleVideoContainerProps>`
  width: ${(props) => `${props.windowWidth}px`};
  height: ${(props) => `${(props.windowWidth*9)/17.5}px`};
  max-width: 100%;
  max-height: ${(props) => `${(props.windowWidth*9)/17.5}px`};
  background-color: antiquewhite;
  border-radius: 8px;
  overflow: hidden;

  filter: drop-shadow(2px 2px 6px ${(props) => props.theme['midnight-400']});
  transition: filter 0.3s ease-in-out;

  @media ${deviceBreakpoint.tablet} {
    width: ${`${videoWidthTablet}rem`};
    height: ${`${videoHeightTablet}rem`};
    max-width: 100%;
    max-height: ${`${videoHeightTablet}rem`};
  }
  @media ${deviceBreakpoint.notebook} {
    &:hover {
      filter: drop-shadow(2px 2px 6px ${(props)=> props.theme['yellow-500']});
    }
  }
`