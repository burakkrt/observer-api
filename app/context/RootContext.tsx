import React, { createContext, ReactNode, useContext, useReducer } from 'react'
import { IMode, IState } from './types'
import reducer from './reducer.ts'
import * as actions from './actions.ts'

const initialState: IState = {
  mode: 'dark',
}

const RootContext = createContext<{
  setTheme: (data: IMode) => void // setTheme işlevinin tipini belirtiyoruz
  state: IState
}>({
  setTheme: () => {}, // Başlangıçta boş bir işlev atıyoruz
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