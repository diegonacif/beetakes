import styled from "styled-components";
import { deviceBreakpoint } from "../../../../styles/breakpoints";

const videoWidth = 35;
const videoHeight = (videoWidth*9)/16;

export const SampleVideoContainer = styled.div`
  width: ${`${videoWidth}rem`};
  height: ${`${videoHeight}rem`};
  max-width: 100%;
  background-color: antiquewhite;
  border-radius: 8px;
  overflow: hidden;

  filter: drop-shadow(2px 2px 6px ${(props) => props.theme['midnight-400']});
  transition: filter 0.3s ease-in-out;

  @media ${deviceBreakpoint.notebook} {
    &:hover {
      filter: drop-shadow(2px 2px 6px ${(props)=> props.theme['yellow-500']});
    }
  }
`