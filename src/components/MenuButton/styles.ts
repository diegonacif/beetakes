import styled from "styled-components";

export const MenuButtonContainer = styled.div`
  position: relative;

  .menu-modal {
    position: absolute;
    top: 2.75rem;
    right: 2.75rem;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;

    width: 10rem;
    height: max-content;
    padding: 1rem 0.5rem;
    border-radius: 8px;

    background-color: rgba(40, 42, 54, 0.95);
    backdrop-filter: blur(3px);
    color: ${(props) => props.theme['yellow-500']};
    font-weight: bold;

    hr {
      width: 90%;
      margin: 0 0 0.5rem 0;
      border-top: 1px solid rgba(255, 255, 255, 0.6);
      border-bottom: 0;
      border-left: 0;
      border-right: 0;
    }
    
    .menu-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      text-align: center;
      cursor: pointer;
      line-height: 1.75rem;
      border-radius: 4px;
      transition: background-color 0.1s;

      span {
        font-size: 1.25rem;
      }

      & + .menu-item {
        margin-top: 0.75rem;
      }

      a {
        width: 100%;
        height: 100%;
        border-radius: 4px;

        &:active {
          background-color: ${(props) => props.theme['gray-100']};
          transition: background-color 0.1s;
        }
      }
    }
  }
`