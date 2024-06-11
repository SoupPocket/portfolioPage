import React from 'react';

import { getResultText } from '../utils/utils';

const Result = ({ userChoice, computerChoice, userOutcome }) => {
  return(
    <div>
      <p className='text-2xl font-bold'>{getResultText(userChoice, computerChoice, userOutcome)}</p>
    </div>
  )
}

export default Result;
