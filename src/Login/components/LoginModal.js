import React from 'react'
import { Modal, Button, Collapse, FormControl, Form,
  FormGroup, Col, Row, ControlLabel, InputGroup, Glyphicon } from 'react-bootstrap'
import * as actions from '../actions'
import * as c from '../constants'

const LoginModal = (props) => {
  let {
    usernameValue,
    passwordValue,
    repeatPasswordValue,
    logInMode,
    passwordsMatch,
    dispatch
  } = props;

  let dispatchLogin = () => dispatch(actions.attemptToLogin());
  let dispatchUsernameChange = (e) => dispatch(actions.updateUsername(e.target.value));
  let dispatchPasswordChange = (e) => dispatch(actions.updatePassword(e.target.value));
  let dispatchRepeatPasswordChange = (e) => dispatch(actions.updateRepeatPassword(e.target.value));
  let dispatchSwitchToRegister = () => dispatch(actions.switchToRegister());
  let dispatchSwitchToLogin = () => dispatch(actions.switchToLogin());
  let dispatchHideModal = () => dispatch(actions.hideLoginModal());

  let footerContent;
  if (logInMode == c.REGISTERING) {
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
        <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} xs={2}>Email</Col>
            <Col xs={10}>
              <InputGroup>
                <InputGroup.Addon><Glyphicon glyph="envelope" /></InputGroup.Addon>
                <FormControl type="email"
                             class="form-control"
                             id="emailInput"
                             placeholder="Email"
                             onInput={dispatchUsernameChange}
                             value={usernameValue} />
              </InputGroup>
           </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} xs={2}>Password</Col>
            <Col xs={10}>
              <InputGroup>
                <InputGroup.Addon><Glyphicon glyph="lock" /></InputGroup.Addon>
                <FormControl type="password"
                             class="form-control"
                             id="passwordInput"
                             placeholder="Password"
                             onInput={dispatchPasswordChange}
                             value={passwordValue} />
              </InputGroup>
            </Col>
          </FormGroup>
          <Collapse in={logInMode == c.REGISTERING}>
            <FormGroup validationState={passwordsMatch ? "success" : "error"}>
              <Col componentClass={ControlLabel} xs={2}>Re-Type Password</Col>
              <Col xs={10}>
                <FormControl type="password"
                             placeholder="Re-Type Password"
                             onInput={dispatchRepeatPasswordChange}
                             value={repeatPasswordValue} />
                <FormControl.Feedback />
              </Col>
            </FormGroup>
          </Collapse>
        </Form>
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
