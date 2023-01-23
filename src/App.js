import React from "react";

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
      <p> {props.parts}</p>
    </div>
  );
};

const App = () => {
  // const-definitions
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course.name} />

      <Content parts={course.parts} />

      <Total parts={course.parts} />
    </div>
  );
};

export default App;
