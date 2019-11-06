import React, { useState } from "react";

//import any components needed
import SpecialButton from './SpecialButton';

//Import your array data to from the provided data file
import { specials } from '../../../data';

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] =useState(specials);

  return (
    <div className="specials">
      {
      specialState.map(
        item => 
        <SpecialButton 
          key={item} 
          value={item} 
          />
          )
      }
    </div>
  );
};

export default Specials;