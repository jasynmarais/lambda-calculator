import React, { useState } from "react";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file
import { numbers } from '../../../data';
import NumberButton from './NumberButton';


const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [ numberState ] = useState(numbers);

  return (
    <div className="numbers">
      {
        numberState.map(
          number => 
          <NumberButton 
          key={number} 
          value={number} 
          />
          )
      }
    </div>
  );
};

export default Numbers;