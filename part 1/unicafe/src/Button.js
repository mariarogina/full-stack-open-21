import React from "react";

export const Button = (props) => {
  return (
    <div>
      <button className="Btn">{props.text}</button>
    </div>
  );
};
