import { call, put, select } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'

import * as actions from './actions'
import Login from '../Login'
import * as t from './actionTypes'

export function* tryToJoinBookGroup({ payload }) {
  const isLoggedIn = yield select(Login.selectors.getIsLoggedIn);
  if (!isLoggedIn) {
    yield put(Login.actions.showLoginModal());
  } else {
    yield put(actions.joinedBookGroup(payload.id))
  }
}

export function* joinBookGroupSaga() {
  yield* takeEvery(t.JOIN_BOOK_GROUP_ATTEMPT, tryToJoinBookGroup);
}
