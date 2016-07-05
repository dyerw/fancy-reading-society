import { authrocket } from '..'

export const authenticateUser = (email, password) => {
  return authrocket.login({
    username: email,
    password: password
  });
}
