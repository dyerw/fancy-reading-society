import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'

import BookGroup from './BookGroup'
import * as selectors from '../selectors'

let BookGroupDisplay = (props) => {
  let {
    bookGroups,
    dispatch
  } = props;

  return (
    <Grid fluid={false}>
      <Row>
        {
          bookGroups.map((bookGroup) => {
            return (
              <Col xs={12} sm={6} md={4} lg={3}>
                <BookGroup dispatch={dispatch} {...bookGroup} />
              </Col>)
          })
        }
      </Row>
    </Grid>
  );
}

let mapStateToProps = (state) => {
  return {
    bookGroups: selectors.getBookGroups(state)
  }
}

export default connect(mapStateToProps)(BookGroupDisplay);
