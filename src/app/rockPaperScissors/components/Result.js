import React from 'react';

import { getResultText } from '../utils/utils';

const Result = ({ userChoice, computerChoice, userOutcome }) => {
  return(
    <div className="result">
      <p>{getResultText(userChoice, computerChoice, userOutcome)}</p>
    </div>
  )
}

export default Result;
