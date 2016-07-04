import React from 'react'
import { connect } from 'react-redux'

import Login from './Login'

let App = (props) => {
    let {
      isShowingLoginModal,
      dispatch
    } = props;

    // We can show the login modal on any page
    let loginModal = isShowingLoginModal ? <Login.components.LoginModal dispatch={dispatch} /> : null;

    return (
        <div>
            {loginModal}
            {props.children}
        </div>
    );
}

let mapStateToProps = (state) => {
  return {
    isShowingLoginModal: Login.selectors.getIsShowingLoginModal(state)
  }
}

export default connect(mapStateToProps)(App);
