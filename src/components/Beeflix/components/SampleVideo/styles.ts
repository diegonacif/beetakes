import styled from "styled-components";
import { deviceBreakpoint } from "../../../../styles/breakpoints";

export const SampleVideoContainer = styled.div`
  width: 22rem;
  height: 12.375rem;
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