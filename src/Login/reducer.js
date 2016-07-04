import * as t from './actionTypes'

const REGISTERING = 0;
const LOGGING_IN = 1;

const initialState = {
  userToken: null,
  isShowingLoginModal: false,
  logInMode: LOGGING_IN,
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
