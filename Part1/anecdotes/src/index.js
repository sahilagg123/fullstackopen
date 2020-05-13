import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const a = Array(6).fill(0);
  const [allstate, setAllState] = useState({
    selected: Math.floor(Math.random() * 6),
    votes: a,
    max: 0,
  });
  // function to handle the most votes functionality which is triggered in the onClick of votes
  // Then updates the state hence updating the page if most voted anectode is changed
  const handlemax = () => {
    const newa = { ...allstate };
    // method to find the max elemnt and update the max in the state
    var sorted = [...allstate.votes].sort((a, b) => b - a);
    newa.max = allstate.votes.indexOf(sorted[0]);
    setAllState(newa);
  };
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {props.anecdotes[allstate.selected]} <br></br>has{" "}
        {allstate.votes[allstate.selected]} votes
      </p>
      <button
        onClick={() => {
          const newa = { ...allstate };
          newa.votes[allstate.selected] = allstate.votes[allstate.selected] + 1;
          setAllState(newa);
          handlemax();
        }}
      >
        vote
      </button>
      <button
        onClick={() => {
          const newa = { ...allstate };
          newa.selected = Math.floor(Math.random() * 6);
          setAllState(newa);
          
        }}
      >
        next
      </button>
      <br></br>
      <br></br>
      <h1>Anecdote with most votes</h1>
      <p> {props.anecdotes[allstate.max]}</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
