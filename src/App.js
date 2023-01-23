import React from "react";
import { useState } from "react";

// Header takes care of rendering the name of the course
const Header = (props) => {
  console.log("Header", props);
  return <h1>{props.course}</h1>;
};

// Content renders the parts and their number of exercises
const Content = (props) => {
  console.log("Content" + props);
  return (
    <div>
      {/* <p>
        {props.parts.map((onePatt) => (
          <Part part={onePatt} />
        ))}
      </p> */}
      <Part part={props.parts[0].name + props.parts[0].exercises} />
      <Part part={props.parts[1].name + props.parts[1].exercises} />
      <Part part={props.parts[2].name + props.parts[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  console.log("Total", props);
  // Total renders the total number of exercises
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}
      </p>
    </div>
  );
};

const Part = (props) => {
  console.log("Part", props);
  return (
    <div>
      <p> {props.part}</p>
    </div>
  );
};

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
  // use state definitions
  // save clickd of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setBad] = useState(0);

  const course = {
    name: "We want to hear your opinion!",
    parts: [
      {
        name: "Fundamentals of React ",
        exercises: 10,
      },
      {
        name: "Using props to pass data ",
        exercises: 7,
      },
      {
        name: "State of a component ",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course.name} />

      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setneutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      {/* <Content parts={course.parts} />

      <Part parts={course.part} />

      <Total parts={course.parts} /> */}
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  );
};

export default App;
