import React from 'react'
import { connect } from 'react-redux'

import BookGroup from './BookGroup'
import * as selectors from '../selectors'

let BookGroupDisplay = (props) => {
  let {
    bookGroups,
    dispatch
  } = props;

  return (
    <div>
    {
      bookGroups.map((bookGroup) => {
        return <BookGroup dispatch={dispatch} {...bookGroup} />
      })
    }
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    bookGroups: selectors.getBookGroups(state)
  }
}

export default connect(mapStateToProps)(BookGroupDisplay);
