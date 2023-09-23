import RootProvider, { useRootContext } from '../app/context/RootContext.tsx'
import { ThemeProvider } from 'styled-components'
import * as theme from '../app/global/theme.tsx'
import { Container } from '../app/global/utilities.styled.ts'
import { GlobalStyle } from '../app/global/global.styled.ts'
import { useEffect, useState } from 'react'

export default function App() {
  const rootContext = useRootContext()
  const [isTheme, setIsTheme] = useState(rootContext.state.mode)

  useEffect(() => {
    rootContext.setTheme(isTheme)
  }, [isTheme])

  const handlerSetTheme = () => {
    setIsTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <RootProvider>
      <ThemeProvider theme={theme[isTheme]}>
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