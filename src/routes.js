import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import Store from './store'

import App from './App'
import LandingPage from './components/LandingPage'

const history = syncHistoryWithStore(browserHistory, Store);

let Routes = (
    <Provider store={Store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={LandingPage} />
            </Route>
        </Router>
    </Provider>
);

export default Routes;
