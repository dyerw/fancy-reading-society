import * as t from './actionTypes'

export const joinBookGroup = (id) => ({
  type: t.JOIN_BOOK_GROUP,
  payload: { id }
});
