import { createSelector } from 'reselect'

import * as constants from './constants'

export const getUserToken = (state) => state[constants.NAME].userToken;

export const getIsLoggedIn = (state) => getUserToken(state) != null;
export const getIsShowingLoginModal = (state) => state[constants.NAME].isShowingLoginModal;
