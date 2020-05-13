import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handlegoodClick = () => {
    setGood(good + 1);
  };
  const handleneutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handlebadClick = () => {
    setBad(bad + 1);
  };
  if (good + bad + neutral === 0) {
    return (
      <div>
        <h1> give feedback</h1>
        <Button onClick={handlegoodClick} text="good"></Button>
        <Button onClick={handleneutralClick} text="neutral"></Button>
        <Button onClick={handlebadClick} text="bad"></Button>
        <h1> statistics </h1>
        <p> No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1> give feedback</h1>
        <Button onClick={handlegoodClick} text="good"></Button>
        <Button onClick={handleneutralClick} text="neutral"></Button>
        <Button onClick={handlebadClick} text="bad"></Button>
        <Statistics good={good} bad={bad} neutral={neutral}>
          {" "}
        </Statistics>
      </div>
    );
  }
};
const Button = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};
const Statistics = ({ good, bad, neutral }) => {
  const total = good + bad + neutral;
  return (
    <div>
      <h1> statistics </h1>
      <table>
        <tbody>
          <Statistic text="good" val={good}></Statistic>
          <Statistic text="neutral" val={neutral}></Statistic>
          <Statistic text="bad" val={bad}></Statistic>
          <Statistic text="total" val={total}></Statistic>
          <Statistic text="average" val={(good - bad) / total}></Statistic>
          <Statistic text="positive" val={(good / total) * 100}></Statistic>
        </tbody>
      </table>
    </div>
  );
};
const Statistic = ({ text, val }) => {
  if (text === "positive") {
    return (
      <tr>
        <td>{text}</td>
        <td>{val}%</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{text}</td>
        <td>{val}</td>
      </tr>
    );
  }
};
ReactDOM.render(<App />, document.getElementById("root"));
