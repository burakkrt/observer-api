import React, { createContext, ReactNode, useContext, useReducer } from 'react'
import { IMode, IState } from './types'
import reducer from './reducer.ts'
import * as actions from './actions.ts'

const storedThemeMode = localStorage.getItem('themeMode')
const initialState: IState = {
  mode: (typeof storedThemeMode === 'string'
    ? JSON.parse(storedThemeMode)
    : 'dark') as 'dark' | 'light',
}

const RootContext = createContext<{
  setTheme: (data: IMode) => void
  state: IState
}>({
  setTheme: () => {},
  state: initialState,
})

const RootProvider: React.FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setTheme = (data: IMode) => {
    dispatch(actions.setTheme(data))
  }

  return (
    <RootContext.Provider
      value={{
        setTheme,
        state,
      }}
    >
      {children}
    </RootContext.Provider>
  )
}

export default RootProvider

export const useRootContext = () => {
  return useContext(RootContext)
}