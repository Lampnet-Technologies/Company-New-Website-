import React from "react";

const Error = (props) => {
  return (
    <div>
      <h2> {props.title} </h2>
      <p> {props.message} </p>
    </div>
  );
};

export default Error;
