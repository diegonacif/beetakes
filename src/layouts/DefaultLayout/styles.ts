import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;

  width: 100vw;
  max-width: 100vw;
  height: 100%;
  min-height: 100vh;

  background: ${(props) => props.theme['gray-900']};
`

export const LayoutContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100%;
  min-height: 100vh;

  background: ${(props) => props.theme['gray-900']};
`