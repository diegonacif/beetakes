import styled from "styled-components";
import Modal from 'react-modal';


export const BudgetsListContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 1rem;
  }
`

export const LogoutButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 0.75rem;
  padding: 0.125rem 0.25rem;
  font-size: .875rem;
  cursor: pointer;
`

export const StyledTable = styled.table`
  /* Table styles */
  border-collapse: collapse;
  width: 100%;
  max-width: 60rem;
  margin-top: 1rem;
  font-family: sans-serif;

  color: black;
  text-align: center;
`;

export const StyledThead = styled.thead`
  /* Table header styles */
  background-color: ${(props) => props.theme['gray-100']};
`;

export const StyledTh = styled.th`
  /* Table header cell styles */
  padding: 10px 15px;
  border: 1px solid #ddd;
`;

export const StyledTbody = styled.tbody`
  /* Table body styles */
  border-spacing: 30px;
`;

export const StyledTr = styled.tr`
  /* Table row styles */
  /* :nth-child(even) {
    background-color: #fafafa;
  } */
  background-color: ${(props) => props.theme['gray-300']};
  cursor: pointer;
`;

export const StyledTd = styled.td`
  /* Table cell styles */
  padding: 10px 15px;
  border-bottom: 4px solid #ddd;

  &#blue { color: blue; }
  &#orange { color: #ed7a2d; }
  &#green { color: green; }

`;

export const SyledModal = styled(Modal)`
  position: relative;
  width: 90%;
  max-width: 40rem;
  height: max-content;
  background-color: ${(props) => props.theme['gray-600']};;
  margin: 2rem auto;
  outline: 0;
  padding: 1.25rem 0.75rem;
  border-radius: 6px;
  color: ${(props) => props.theme['gray-100']};

  .action-buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 1.5rem;
    justify-content: space-between;
    row-gap: 2rem;

    .status-wrapper {
      display: flex;
      align-items: center;

      span {
        font-weight: 600;
      }

      select {
        width: max-content;
        padding: 0.125rem 0.25rem;
        font-size: .875rem;
        margin-left: .5rem;
        cursor: pointer;
      }

      button {
        margin-left: .75rem;
        cursor: pointer;

        &#alterar-btn {
          background-color: ${(props) => props.theme['gray-300']};
          border-radius: 4px;
        }
      }
    }


    button {
      width: max-content;
      padding: 0.125rem 0.25rem;
      font-size: .875rem;
      cursor: pointer;

      &#excluir-btn {
        background-color: ${(props) => props.theme['error']};
        border-radius: 4px;
        border: 0;
      }
    }
  }

  #close-btn {
    position: absolute;
    top: .75rem;
    right: .75rem;
    cursor: pointer;
  }

  h2 {
    margin-bottom: 1.25rem;
    text-align: center;
  }

  p~p {
    margin-top: 0.5rem;
  }

  strong {
    font-weight: 600;
  }
`
