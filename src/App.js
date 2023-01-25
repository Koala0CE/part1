import React from "react";
import { useState } from "react";

// Header takes care of rendering the name of the course
const Header = (props) => {
  console.log("Header", props);
  return <h1>{props.course}</h1>;
};
const Statistics = (props) => {
  console.log("Statistics", props);
  return (
    <div>
      <p1>Good {props.stats}</p1>
      {/* <p1>Neutral {props.stats}</p1> <p1>Bad {props.stats}</p1>{" "} */}
    </div>
  );
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
      {/* <Part part={props.good} /> */}
      {/* <Part part={props.neutral} />
      <Part part={props.bad} /> */}
      {/* <Part part={props.parts[1].name + props.parts[1].exercises} />
      <Part part={props.parts[2].name + props.parts[2].exercises} /> */}
      <Statistics stats={props.good} />
      <Statistics stats={props.neutral} />
      <Statistics stats={props.bad} />
    </div>
  );
};

// const Total = (props) => {
//   console.log("Total", props);
//   // Total renders the total number of exercises
//   return (
//     <div>
//       <p>blabla {props.good + props.bad + props.neutral}</p>
//     </div>
//   );
// };

const Part = (props) => {
  console.log("Stats", props);
  return (
    <div>
      <p> Good {props.stats}</p>
      <p> Neutral {props.stats}</p>
      <p> Bad {props.stats}</p>
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

  const total = good + bad + neutral;
  const average = total / 3;
  const percentage = (bad * 100) / total;

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

      {/* <Part stats={good + bad + neutral} /> */}
      {/* <Total parts={course.parts} /> */}
      {/* <Statistics stats={good + neutral + bad} /> */}
      <h1>Statistics</h1>
      <Statistics stats={good} />
      <Statistics stats={neutral} />
      <Statistics stats={bad} />
      {/* <p>Good {(good, neutral, bad)}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {good + neutral + bad}</p>
      <p>Average {average} </p>
      <p>Percentage {percentage} %</p> */}
    </div>
  );
};

export default App;
