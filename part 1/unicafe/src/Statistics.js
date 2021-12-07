import React from "react";
import { StatisticLine } from "./StatisticLine";

export const Statistics = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <StatisticLine text="good" value={props.good} />
          </tr>
          <tr>
            <StatisticLine text="neutral" value={props.neutral} />
          </tr>
          <tr>
            <StatisticLine text="bad" value={props.bad} />
          </tr>
          <tr>
            <StatisticLine text="all" value={props.all} />
          </tr>
          <tr>
            <StatisticLine text="average" value={props.average} />
          </tr>
          <tr>
            <StatisticLine text="positive" value={props.positive} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};
