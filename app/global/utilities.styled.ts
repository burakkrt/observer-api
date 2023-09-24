import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  margin: 30px auto;
  color: ${(props) => props.theme.colors.main};
  padding: 50px 20px;
  background-color: ${(props) => props.theme.backgrounds.main};
  border: 1px solid ${({ theme }) => theme.borders.color};
  border-radius: 8px;

  .container-title {
    display: inline-block;
    font-size: 24px;
    margin-bottom: 40px;
    letter-spacing: 2px;
    font-weight: bold;
    text-align: start;
    transition: 300ms ease-in-out;
    cursor: context-menu;

    &:hover {
      transform: translateX(20px);
      color: orange;
    }

    &::before {
      content: '#';
      margin-right: 6px;
    }
  }
`