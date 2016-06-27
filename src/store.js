import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'

let Store = createStore(
  combineReducers({
    routing: routerReducer
  })
);

export default Store;
