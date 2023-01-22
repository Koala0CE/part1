import React from "react";

const Header = (props) => {
  // Header takes care of rendering the name of the course
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  console.log("Content" + props);
  // Content renders the parts and their number of exercises
  return (
    <div>
      {/* <p>{props.parts}</p>
       */}
      {/* <Parts part={props.parts[0].part} /> */}
      {/* {props.parts.map((onePart) => (
        <Parts part={onePart} />
      ))} */}

      <Parts part={props.parts[0].part + props.parts[0].exercise} />
      <Parts part={props.parts[1].part + props.parts[1].exercise} />
      <Parts part={props.parts[2].part + props.parts[2].exercise} />
    </div>
  );
};

const Total = (props) => {
  console.log(props);
  // Total renders the total number of exercises
  return (
    <div>
      <p>Number of exercises {props.exercises}</p>
    </div>
  );
};

const Parts = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {/* {props.part.part}: {props.part.exercise} */}
        {props.part}
      </p>
    </div>
  );
};

const App = () => {
  // const-definitions
  const course = "Half Stack application development";
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;
  const parts = [
    { part: "Fundamentals of React ", exercise: 10 },
    { part: "Using props to pass data ", exercise: 7 },
    { part: "State of a component ", exercise: 14 },
  ];

  return (
    <div>
      <Header course={course} />

      <Content parts={parts} />

      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
