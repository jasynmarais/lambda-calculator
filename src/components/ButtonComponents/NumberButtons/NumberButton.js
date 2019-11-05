import React from "react";

const NumberButton = ({ value }) => {
  return (
    <div>
      <button className={Number(value) === 0 ? 'bigButton' : null}>
        {value}
      </button>
    </div>
  );
};

export default NumberButton;