import * as t from './actionTypes'

const initialState = {
  bookGroups: [{
    id: 0,
    bookTitle: "Harry Potter and the Sorcerer's Stone",
    bookAuthor: "J.K. Rowling",
    bookCoverImageUrl: "https://upload.wikimedia.org/wikipedia/en/b/bf/Harry_Potter_and_the_Sorcerer's_Stone.jpg",
    bookPages: 450,
    weeksToRead: 5,
    currentMembers: 3
  },
  {
    id: 1,
    bookTitle: "Ender's Game",
    bookAuthor: "Orson Scott Card",
    bookCoverImageUrl: "http://d.gr-assets.com/books/1408303130l/375802.jpg",
    bookPages: 586,
    weeksToRead: 6,
    currentMembers: 7
  },
  {
    id: 2,
    bookTitle: "Dune",
    bookAuthor: "Frank Herbert",
    bookCoverImageUrl: "http://media.tumblr.com/tumblr_m589qrFffi1qbaom0.jpg",
    bookPages: 203,
    weeksToRead: 2,
    currentMembers: 5
  }]
}

let reducer = (state = initialState, action) => {
  switch(action.type) {
    case t.JOIN_BOOK_GROUP:
      return {
        ...state,
        bookGroups: state.bookGroups.map((bookGroup) => {
          if (bookGroup.id == action.payload.id) {
            return {
              ...bookGroup,
              currentMembers: bookGroup.currentMembers + 1
            };
          } else {
            return bookGroup;
          }
        })
      }

    default:
      return state;
  }
}

export default reducer;
