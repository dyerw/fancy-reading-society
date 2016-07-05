import React from 'react'
import ReactDOM from 'react-dom'
import AuthRocket from 'authrocket-fix'

import Routes from './routes'

export const authrocket = new AuthRocket({
  jsUrl: 'https://fbsociety.e1.loginrocket.com/'
});

ReactDOM.render(
    Routes,
    document.getElementById('mount')
);
