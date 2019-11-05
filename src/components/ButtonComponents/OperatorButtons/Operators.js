import React, { useState } from "react";

//import any components needed


//Import your array data to from the provided data file
import { operators } from '../../../data';
import OperatorButton from './OperatorButton';

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);

  return (
    <div className="operators">
      {
         operatorState.map(
           item => 
           <OperatorButton 
           key={item.value} 
           value={item.value} 
           />
           )
      }
    </div>
  );
};

export default Operators;