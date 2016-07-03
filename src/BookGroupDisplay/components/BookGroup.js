import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

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
    <Col>
      <Row>
        <Col xs={6}><img height="100" width="70" src={bookCoverImageUrl}/></Col>
        <Col xs={6}>
          <Row>{bookTitle}</Row>
          <Row>{bookAuthor}</Row>
          <Row>{bookPages} pages in {weeksToRead} weeks</Row>
          <Row>{currentMembers} / 8 Members</Row>
          <Row> <Button bsStyle="primary" onClick={joinBookGroupId}>Join</Button></Row>
        </Col>
      </Row>
    </Col>
  );
}

export default BookGroup;
