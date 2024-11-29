import styled from "styled-components";
import { deviceBreakpoint } from "../../styles/breakpoints";

export const StyledParagraph = styled.p`
  color: ${(props) => props.theme['gray-800']};
  font-size: larger;
  max-width: 38rem;
  margin: 0 auto;
  line-height: 1.25;
  text-align: left;

  strong {
    font-weight: bold;
  }

  @media ${deviceBreakpoint.desktop} {
    font-size: 1.5rem;
  }
`;