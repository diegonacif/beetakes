import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 30px;

  background: rgba(0, 0, 0, 0.9);

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  animation: fadeIn 200ms ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

export const Modal = styled.div`
  position: relative;

  width: min(1100px, 100%);
  max-height: calc(100vh - 80px);

  background: #0c0c0c;

  box-shadow: 0 30px 100px rgba(0, 0, 0, 0.6);
`;

export const Content = styled.div`
  width: 100%;
`;

export const CloseButton = styled.button`
  position: absolute;
  z-index: 2;

  top: -48px;
  right: 0;

  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: 1px solid rgba(245, 245, 245, 0.3);
  border-radius: 50%;

  outline: none;

  background: rgba(12, 12, 12, 0.8);
  color: #f5f5f5;

  font-family: inherit;
  font-size: 25px;
  font-weight: 300;
  line-height: 1;

  cursor: pointer;

  transition:
    background 200ms ease,
    border-color 200ms ease,
    color 200ms ease;

  -webkit-appearance: none;
  appearance: none;

  &:hover {
    background: #d4af37;
    border-color: #d4af37;
    color: #0c0c0c;
  }
`;