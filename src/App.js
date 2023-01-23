import React from "react";

// Header takes care of rendering the name of the course
const Header = (props) => {
  console.log("Header", props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

// Content renders the parts and their number of exercises
const Content = (props) => {
  console.log("Content" + props);
  return (
    <div>
      <Part part={props.parts[0].part + props.parts[0].exercise} />
      <Part part={props.parts[1].part + props.parts[1].exercise} />
      <Part part={props.parts[2].part + props.parts[2].exercise} />
    </div>
  );
};

const Total = (props) => {
  console.log("Total", props);
  // Total renders the total number of exercises
  return (
    <div>
      <p>Number of exercises {props.exercises}</p>
    </div>
  );
};

const Part = (props) => {
  console.log("Part", props);
  return (
    <div>
      <p>{props.part}</p>
    </div>
  );
};

const App = () => {
  // const-definitions
  const course = "Half Stack application development";
  const parts = [
    { part: "Fundamentals of React ", exercise: 10 },
    { part: "Using props to pass data ", exercise: 7 },
    { part: "State of a component ", exercise: 14 },
  ];

  return (
    <div>
      <Header course={course} />

      <Content parts={parts} />

      <Total
        exercises={parts[0].exercise + parts[1].exercise + parts[2].exercise}
      />
    </div>
  );
};

export default App;
