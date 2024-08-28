import styled from "styled-components";

export const SelectorContainer = styled.div`
  position: relative;
  /* display: flex;
  flex-direction: column; */

  svg {
    position: absolute;
    top: .7rem;
    right: .5rem;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 1rem .5rem .25rem;
  background-color: ${({ theme }) => theme['white']};
  border: 2px solid ${(props) => props.theme['gray-300']};
  border-radius: 5px;
  transition: border 0.2s;
  font-size: 1rem;
  color: ${(props) => props.theme['gray-700']};
  background-image: url("/img/selectarrow.png") no-repeat right;
  
  -webkit-appearance: none;
  appearance: none;

  &:focus {
    outline: 0;
    border: 2px solid ${({ theme }) => theme['gray-500']};
    transition: border 0.3s;
  }

  &#no-value-selected {
    color: ${({ theme }) => theme['gray-500']};
  }

  &#error {
    color: ${({ theme }) => theme['gray-500']};
    border: 2px solid ${({ theme }) => theme['error']};
  }
`;

export const SelectLabel = styled.label`
  position: absolute;
  top: -.55rem;
  left: .45rem;

  font-size: 0.875rem;
  color: ${(props) => props.theme['white']};

  background-color: ${(props) => props.theme['gray-400']}; 
  border-radius: 4px;
  padding: .125rem .375rem;
`;

export const MenuItem = styled.option`
  color: ${(props) => props.theme['gray-400']};
`;