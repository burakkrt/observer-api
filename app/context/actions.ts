import { SET_THEME } from './contants'
import { IAction, IMode } from './types'

export const setTheme = (payload: IMode): IAction => ({
  type: SET_THEME,
  payload,
})