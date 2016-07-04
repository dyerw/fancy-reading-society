import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import * as actions from '../actions'

const LoginModal = (props) => {
  let {
    usernameValue,
    passwordValue,
    dispatch
  } = props;

  let dispatchLogin = () => dispatch(actions.attemptToLogin());
  let dispatchUsernameChange = (e) => dispatch(actions.updateUsername(e.target.value));
  let dispatchPasswordChange = (e) => dispatch(actions.updatePassword(e.target.value));

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
          </div>
          <Button bsStyle="primary" onClick={dispatchLogin}>Submit</Button>
        </form>
      </Modal.Body>
    </Modal.Dialog>
  );
}

export default LoginModal;
