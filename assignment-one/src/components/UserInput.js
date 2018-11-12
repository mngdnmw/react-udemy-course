import React from "react";

const userInput = props => {
  const css = {
    border: "2px solid red"
  };
  return (
    // UserInput should hold an input element
    <div>
      <input type="text" style={css} onChange={props.changed} value={props.startvalue} />
    </div>
  )
};

export default userInput;
