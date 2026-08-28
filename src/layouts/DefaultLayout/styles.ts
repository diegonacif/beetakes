import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  background: ${(props) => props.theme["gray-900"]};
`;

export const LayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  background: ${(props) => props.theme["gray-900"]};
`;