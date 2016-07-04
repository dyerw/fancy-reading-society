import { call, put, select } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'

import * as actions from './actions'
import * as t from './actionTypes'
import * as selectors from './selectors'

export function* tryToLogin() {
  // TODO: make a login call to api
  const username = yield select(selectors.getUsernameValue);
  const password = yield select(selectors.getPasswordValue);
  yield put(actions.loginConfirmed('some_id'));
  yield put(actions.hideLoginModal());
}

export function* loginSaga() {
  yield* takeEvery(t.LOGIN_ATTEMPT, tryToLogin);
}
