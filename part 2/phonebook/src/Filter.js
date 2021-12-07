import React from "react";
const Filter = ({ handleSetSearchString }) => {
  return (
    <div>
      <input type="text" onChange={(e) => handleSetSearchString(e)} />
    </div>
  );
};

export default Filter;
