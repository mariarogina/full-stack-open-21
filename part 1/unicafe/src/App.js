import React, { useState } from "react";
import { Statistics } from "./Statistics";
import { Button } from "./Button";
import "./styles.css";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <div className="feedbackBtns">
          <Button text="good" />
          <Button text="neutral" />
          <Button text="bad" />
        </div>
      </div>
      <h1>Statistics</h1>
      {good || neutral || bad ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average}
          positive={positive}
        />
      ) : (
        <p>No feedback given</p>
      )}
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
