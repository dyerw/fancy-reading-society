import { createSelector } from 'reselect'

import * as constants from './constants'

export const getUserToken = (state) => state[constants.NAME].userToken;

export const getIsLoggedIn = (state) => getUserToken(state) != null;
export const getIsShowingLoginModal = (state) => state[constants.NAME].isShowingLoginModal;
export const getUsernameValue = (state) => state[constants.NAME].usernameValue;
export const getPasswordValue = (state) => state[constants.NAME].passwordValue;
export const getRepeatPasswordValue = (state) => state[constants.NAME].repeatPasswordValue;
export const getLogInMode = (state) => state[constants.NAME].logInMode;

export const getIsRegistering = (state) => getLogInMode(state) == constants.REGISTERING;

export const getPasswordsMatch = (state) => getPasswordValue(state) == getRepeatPasswordValue(state);
