import * as t from './actionTypes'
import * as c from './constants'

const initialState = {
  userToken: null,
  isShowingLoginModal: false,
  logInMode: c.LOGGING_IN,
  usernameValue: "",
  passwordValue: ""
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

    case t.SWITCH_TO_REGISTER_MODE:
      return {
        ...state,
        logInMode: c.REGISTERING
      }

    case t.SWITCH_TO_LOGIN_MODE:
      return {
        ...state,
        logInMode: c.LOGGING_IN
      }

    case t.USERNAME_FIELD_UPDATED:
      return {
        ...state,
        usernameValue: payload.value
      }

    case t.PASSWORD_FIELD_UPDATED:
      return {
        ...state,
        passwordValue: payload.value
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
