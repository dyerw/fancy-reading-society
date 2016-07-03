import React from 'react'
import { Button } from 'react-bootstrap'

import * as actions from '../actions'

let BookGroup = (props) => {
  let {
    id,
    bookCoverImageUrl,
    bookTitle,
    bookAuthor,
    bookPages,
    weeksToRead,
    currentMembers,
    dispatch
  } = props;

  let joinBookGroupId = () => dispatch(actions.joinBookGroup(id));

  return (
    <div>
      <span><img height="100" width="70" src={bookCoverImageUrl}/></span>
      <span>
        <div>{bookTitle}</div>
        <div>{bookAuthor}</div>
        <div>{bookPages} pages in {weeksToRead} weeks</div>
        <div>{currentMembers} / 8 Members</div>
        <div> <Button bsStyle="primary" onClick={joinBookGroupId}>Join</Button></div>
      </span>
    </div>
  );
}

export default BookGroup;
