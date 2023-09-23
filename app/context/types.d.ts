import { SET_THEME } from './contants.ts'

export interface IState {
  mode: 'dark' | 'light'
}

export type IMode = 'dark' | 'light'

export interface IAction {
  type: typeof SET_THEME
  payload: 'dark' | 'light'
}