import * as t from './actionTypes'

export const joinBookGroup = (id) => ({
  type: t.JOIN_BOOK_GROUP_ATTEMPT,
  payload: { id }
});

export const joinedBookGroup = (id) => ({
  type: t.JOIN_BOOK_GROUP_CONFIRMED,
  payload: { id }
});
