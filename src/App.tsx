import RootProvider, { useRootContext } from '../app/context/RootContext.tsx'
import { ThemeProvider } from 'styled-components'
import * as theme from '../app/global/theme.tsx'
import { Container } from '../app/global/utilities.styled.ts'
import { GlobalStyle } from '../app/global/global.styled.ts'
import { useEffect, useState } from 'react'
import Header from './components/header'

export default function App() {
  const { state, setTheme } = useRootContext()
  const [isTheme, setIsTheme] = useState(state.mode)

  useEffect(() => {
    setIsTheme(state.mode)
    console.log('das')
  }, [state.mode])

  useEffect(() => {
    setTheme(isTheme)
  }, [isTheme])

  const handlerSetTheme = () => {
    setIsTheme((isTheme) => (isTheme === 'dark' ? 'light' : 'dark'))
  }

  console.log('app çalıştı')

  return (
    <RootProvider>
      <ThemeProvider theme={theme[isTheme]}>
        <Header mode={setIsTheme} />
        <Container>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            blanditiis corporis debitis distinctio impedit iste odit placeat
            quae qui similique. Cum distinctio eius harum inventore laboriosam
            nemo quasi reiciendis. Consequuntur.
          </p>
          <button onClick={handlerSetTheme}>Set Theme</button>
          <span>{isTheme}</span>
        </Container>
        <GlobalStyle />
      </ThemeProvider>
    </RootProvider>
  )
}