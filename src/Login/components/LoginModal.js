import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import * as actions from '../actions'
import * as c from '../constants'

const LoginModal = (props) => {
  let {
    usernameValue,
    passwordValue,
    repeatPasswordValue,
    logInMode,
    dispatch
  } = props;

  let dispatchLogin = () => dispatch(actions.attemptToLogin());
  let dispatchUsernameChange = (e) => dispatch(actions.updateUsername(e.target.value));
  let dispatchPasswordChange = (e) => dispatch(actions.updatePassword(e.target.value));
  let dispatchSwitchToRegister = () => dispatch(actions.switchToRegister());
  let dispatchSwitchToLogin = () => dispatch(actions.switchToLogin());
  let dispatchHideModal = () => dispatch(actions.hideLoginModal());

  let repeatPasswordInput;
  let footerContent;
  if (logInMode == c.REGISTERING) {
    repeatPasswordInput = (
      <input type="password"
             class="form-control"
             id="repeatPasswordInput"
             placeholder="Re-Type Password"
             onInput={dispatchPasswordChange}
             value={repeatPasswordValue} />
    );

    footerContent = (
      <div>
        Already have an account? <Button bsStyle="link" onClick={dispatchSwitchToLogin}>Log In</Button>
      </div>
    );
  } else {
    footerContent = (
      <div>
        Need an account? <Button bsStyle="link" onClick={dispatchSwitchToRegister}>Register</Button>
      </div>
    );
  }

  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Login to continue</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <div class="form-group">
            <label for="emailInput">Email address</label>
            <input type="email"
                   class="form-control"
                   id="emailInput"
                   placeholder="Email"
                   onInput={dispatchUsernameChange}
                   value={usernameValue} />
          </div>
          <div class="form-group">
            <label for="passwordInput">Password</label>
            <input type="password"
                   class="form-control"
                   id="passwordInput"
                   placeholder="Password"
                   onInput={dispatchPasswordChange}
                   value={passwordValue} />
            {repeatPasswordInput}
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button bsStyle="primary" onClick={dispatchLogin}>
          {logInMode == c.LOGGING_IN ? "Log In" : "Register"}
        </Button>
        <Button onClick={dispatchHideModal}>Cancel</Button>
        {footerContent}
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default LoginModal;
