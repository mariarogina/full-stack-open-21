import React, { useState } from "react";
import { Anecdote } from "./Anecdote";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];
  const randArr = new Array(7).fill(0);
  const randomNum = Math.floor(Math.random() * 7);
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(randArr);
  const [maxVotesIndex, setMaxVotesIndex] = useState(0);

  const handleSetSelected = () => {
    setSelected(randomNum);
  };

  const handleVotes = (selected) => {
    const copy = [...points];
    copy[selected] += 1;
    let maxVotesIndex = points.indexOf(Math.max(...points));
    setPoints(copy);
    setMaxVotesIndex(maxVotesIndex);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} />
      <button onClick={() => handleVotes(selected)}>Vote</button>
      <button onClick={() => handleSetSelected()}>Next anecdote</button>
      <h1>Anecdote with max votes</h1>
      <Anecdote anecdote={anecdotes[maxVotesIndex]} />
      <p>Has {points[maxVotesIndex]} votes</p>
    </div>
  );
};

export default App;
