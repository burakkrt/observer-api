import { SET_THEME } from './contants'
import { IAction, IState } from './types'

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        mode: action.payload,
      }
  }
}

export default reducer