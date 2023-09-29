import RootProvider, { useRootContext } from '../app/context/RootContext.tsx'
import { ThemeProvider } from 'styled-components'
import * as theme from '../app/global/theme.ts'
import { GlobalStyle } from '../app/global/global.styled.ts'
import { useState } from 'react'
import Header from './components/header'
import Home from './pages/home'
import Intersection from './pages/intersection'

export default function App() {
  const { state } = useRootContext()
  const [isTheme, setIsTheme] = useState(state.mode)

  return (
    <RootProvider>
      <ThemeProvider theme={theme[isTheme]}>
        <Header mode={setIsTheme} />
        <Home />
        <Intersection />
        <GlobalStyle />
      </ThemeProvider>
    </RootProvider>
  )
}