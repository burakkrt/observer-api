import { FormGroup, Switch } from '@mui/material'
import styled from 'styled-components'

export const ModeSwitch = styled(Switch)`
  .MuiSwitch-switchBase {
    color: ${(props) => props.theme.switchMode.toogleColor};
  }

  .MuiSwitch-switchBase.Mui-checked {
    color: ${(props) => props.theme.switchMode.toogleColor};
  }
`

export const FormGroupMode = styled(FormGroup)`
  .MuiFormControlLabel-root {
  }

  .MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label {
    color: ${(props) => props.theme.switchMode.toogleColor};
    font-weight: bold;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${({ theme }) => theme.backgrounds.main};

  .nav {
    display: block;
    width: 100%;
    margin-left: 100px;
    text-align: start;
    color: ${({ theme }) => theme.colors.main};
    font-weight: bold;
    font-size: 18px;

    li {
      display: inline-block;

      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
`