import * as constants from './constants'

export let getBookGroups = (state) => {
  return state[constants.NAME].bookGroups;
}
