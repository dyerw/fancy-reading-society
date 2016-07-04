import * as t from './actionTypes'

const initialState = {
  userToken: null,
  isShowingLoginModal: false
}

let reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case t.SHOW_LOGIN_MODAL:
      return {
        ...state,
        isShowingLoginModal: true
      }

    case t.HIDE_LOGIN_MODAL:
      return {
        ...state,
        isShowingLoginModal: false
      }

    case t.LOGIN_CONFIRMED:
      return {
        ...state,
        userToken: payload.userToken
      }

    default:
      return state;
  }
}

export default reducer;
