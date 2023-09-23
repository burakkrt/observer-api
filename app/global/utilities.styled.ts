import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid black;
  width: 80%;
  margin: auto;
  background-color: ${(props) => props.theme.backgrounds.main};
`