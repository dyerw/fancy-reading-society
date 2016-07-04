import * as t from './actionTypes'

export const showLoginModal = () => ({
  type: t.SHOW_LOGIN_MODAL
});

export const hideLoginModal = () => ({
  type: t.HIDE_LOGIN_MODAL
});

export const attemptToLogin = () => ({
  type: t.LOGIN_ATTEMPT
});

export const loginConfirmed = (userToken) => ({
  type: t.LOGIN_CONFIRMED,
  payload: { userToken }
});
