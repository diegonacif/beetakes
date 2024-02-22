import styled from "styled-components";

export const PackContainer = styled.div`
  height: max-content;
  width: 18rem;
  background-color: ${(props)=> props.theme['gray-100']};
  color: ${(props)=> props.theme['gray-600']};

  .pack-title {
    display: flex;
    align-items: center;
    height: 4rem;
    width: fit-content;
    margin: 0 auto;

    span {
      font-size: 1.125rem;
      font-weight: 600;
      text-align: center;
    }
  }
`;

export const PackCard = styled.div`
  background-color: ${(props)=> props.theme['gray-300']};
  border-radius: 6px;
  overflow: hidden;
`;

export const PackIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;
  height: 2.75rem;
`;

export const PackList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
  padding-bottom: 0.5rem;
`;

export const ItemsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  background-color: ${(props)=> props.theme['gray-100']};
  width: 95%;
  height: fit-content;
  padding: 0.5rem 0.75rem;

  font-weight: 600;
  border-radius: 3px;

  svg {
    min-width: 18px;
  }
`;

export const PackPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  height: 4rem;

  h1 {
    font-size: 1.675rem;
  }

  span {

  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10rem;

  img {
    width: 100%;
    height: auto;
  }
`;

export const OrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  height: 3rem;
  /* background-color: #f2742c; */
  background-color: ${(props) => props.theme['yellow-500']};

  color: ${(props) => props.theme['gray-600']};
  font-weight: 600;
  font-size: 1.25rem;

  border: none;
  border-radius: 0;
  cursor: pointer;
`