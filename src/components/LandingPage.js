import React from 'react'
import { PageHeader } from 'react-bootstrap'

import BookGroupDisplay from '../BookGroupDisplay'

let Fuckfuck = BookGroupDisplay.components.BookGroupDisplay;
let LandingPage = (props) => {
    return (
      <div>
        <PageHeader>Fancy Book Club</PageHeader>
        <Fuckfuck />
      </div>
    );
}

export default LandingPage;
