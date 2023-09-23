import { FormControlLabel } from '@mui/material'
import { useRootContext } from '../../../app/context/RootContext.tsx'
import React, { useEffect, useState } from 'react'
import * as Styled from './header.styled.ts'
import { IProps } from '../../../app/context/types'

export default function Header({ mode }: IProps) {
  const rootContext = useRootContext()
  const [isMode, setIsMode] = useState(rootContext.state.mode)
  const [isSwitchMode, setIsSwitch] = useState<boolean>(
    rootContext.state.mode === 'dark'
  )

  useEffect(() => {
    mode(isSwitchMode ? 'dark' : 'light')
    setIsMode(isSwitchMode ? 'dark' : 'light')
  }, [isSwitchMode])

  const handlerThemeChance = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSwitch(e.target.checked)
  }

  return (
    <Styled.Header>
      <ul className="nav">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <Styled.FormGroupMode className="switchMode">
        <FormControlLabel
          control={
            <Styled.ModeSwitch
              checked={isSwitchMode}
              onChange={handlerThemeChance}
            />
          }
          label={isMode[0].toUpperCase() + isMode.slice(1)}
        />
      </Styled.FormGroupMode>
    </Styled.Header>
  )
}