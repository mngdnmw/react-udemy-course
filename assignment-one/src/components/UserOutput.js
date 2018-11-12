import React from "react";
import "../assets/UserOutput.css";

const userOutput = (props) => {
  return (
    // UserOutput two paragraphs
    <div className="UserOutput">
      <p>{props.username}</p>
      <p onClick={props.click}>Click {props.username}</p>
    </div>
  )
};

export default userOutput;