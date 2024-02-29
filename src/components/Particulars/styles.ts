import styled from "styled-components";

export const ParticularsContainer = styled.div`
  display: grid;
  row-gap: 3rem;
  justify-items: center;
  width: 100vw;
  background-color: ${(props) => props.theme['gray-100']};
  
  &[data-breakpoint="mobile"] {
    grid-template-columns: repeat(1, 1fr);
    padding: 3rem 0.75rem;
  };
  &[data-breakpoint="tablet"] {
    grid-template-columns: repeat(1, 1fr);
    padding: 3rem 1rem;
  };
  &[data-breakpoint="notebook"] {
    grid-template-columns: repeat(2, 1fr);
    padding: 3rem 2rem;
  };
  &[data-breakpoint="desktop"] {
    grid-template-columns: repeat(2, 1fr);
    padding: 3rem 4rem;
  };
  &[data-breakpoint="widescreen"] {
    grid-template-columns: repeat(4, 1fr);
    padding: 3rem 8rem;
  };
`;