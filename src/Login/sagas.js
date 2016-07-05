import { call, put, select } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'

import * as actions from './actions'
import * as t from './actionTypes'
import * as selectors from './selectors'
import * as services from './services'

export function* tryToLogin() {
  // TODO: make a login call to api
  const username = yield select(selectors.getUsernameValue);
  const password = yield select(selectors.getPasswordValue);
  const isRegistering = yield select(selectors.getIsRegistering);

  if (isRegistering) {
    const passwordsMatch = yield select(selectors.getPasswordsMatch);
    console.log(passwordsMatch);
    if (passwordsMatch) {
      yield put(actions.loginConfirmed('some_id'));
      yield put(actions.hideLoginModal());
    } else {

    }
  } else {
    const token = yield call(services.authenticateUser, username, password);
    console.log(token);

    yield put(actions.loginConfirmed('some_id'));
    yield put(actions.hideLoginModal());
  }
}

export function* loginSaga() {
  yield* takeEvery(t.LOGIN_ATTEMPT, tryToLogin);
}
