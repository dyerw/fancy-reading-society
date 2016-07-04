import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import * as actions from '../actions'

const LoginModal = (props) => {
  let {
    dispatch
  } = props;

  let dispatchLogin = () => dispatch(actions.attemptToLogin())

  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Login to continue</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <div class="form-group">
            <label for="emailInput">Email address</label>
            <input type="email" class="form-control" id="emailInput" placeholder="Email" value="" />
          </div>
          <div class="form-group">
            <label for="passwordInput">Password</label>
            <input type="password" class="form-control" id="passwordInput" placeholder="Password" value="" />
          </div>
          <Button bsStyle="primary" onClick={dispatchLogin}>Submit</Button>
        </form>
      </Modal.Body>
    </Modal.Dialog>
  );
}

export default LoginModal;
