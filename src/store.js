import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import { browserHistory } from 'react-router'

import BookGroupDisplay from './BookGroupDisplay'
import Login from './Login'

const sagaMiddleware = createSagaMiddleware()
const myRouterMiddleware = routerMiddleware(browserHistory)

let Store = createStore(
  combineReducers({
    public: {
      isLoggedIn: Login.selectors.isLoggedIn
    },
    routing: routerReducer,
    [Login.constants.NAME]: Login.reducer,
    [BookGroupDisplay.constants.NAME]: BookGroupDisplay.reducer
  }),
  compose (
    // Middleware
    applyMiddleware(sagaMiddleware),
    applyMiddleware(myRouterMiddleware),

    // Dev tools enable
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(BookGroupDisplay.sagas.joinBookGroupSaga);
sagaMiddleware.run(Login.sagas.loginSaga);

export default Store;
