import React from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Total } from "../Total";

export const Course = (props) => {
  console.log({ ...props } + "Course props");
  return (
    <div>
      <Header name={props.name} />
      <Content parts={props.parts} />
      <Total />
    </div>
  );
};

export default Course;
