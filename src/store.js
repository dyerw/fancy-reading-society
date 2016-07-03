import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'
import BookGroupDisplay from './BookGroupDisplay'
import Login from './Login'

let Store = createStore(
  combineReducers({
    routing: routerReducer,
    [Login.constants.NAME]: Login.reducer,
    [BookGroupDisplay.constants.NAME]: BookGroupDisplay.reducer
  }), window.devToolsExtension && window.devToolsExtension()
);

export default Store;
