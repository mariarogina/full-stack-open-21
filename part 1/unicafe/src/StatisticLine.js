import React from "react";

export const StatisticLine = (props) => {
  return (
    <div>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </div>
  );
};
