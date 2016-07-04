import React from 'react'
import { connect } from 'react-redux'

import Login from './Login'

let App = (props) => {
    let {
      isShowingLoginModal,
      ...rest
    } = props;

    // We can show the login modal on any page
    let loginModal = isShowingLoginModal ? <Login.components.LoginModal {...rest} /> : null;

    return (
        <div>
            {loginModal}
            {props.children}
        </div>
    );
}

let mapStateToProps = (state) => {
  return {
    isShowingLoginModal: Login.selectors.getIsShowingLoginModal(state),
    usernameValue: Login.selectors.getUsernameValue(state),
    passwordValue: Login.selectors.getPasswordValue(state),
    logInMode: Login.selectors.getLogInMode(state)
  }
}

export default connect(mapStateToProps)(App);
