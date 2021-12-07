import React from "react";
import { Part } from "./Part";

export const Content = (props) => {
  console.log(props.parts);
  return (
    <div>
      <ul>
        {props.parts.map((part) => (
          <li>
            <Part key={part.id} name={part.name} exercises={part.exercises} />
          </li>
        ))}
      </ul>
      <p>
        {" "}
        Total exercises:
        {props.parts.reduce((acc, curr) => acc + curr.exercises, 0)}
      </p>
    </div>
  );
};
