import React from "react";

const heading = props => {
  return (
    <div>
      <h2 className="heading">
        <span> {props.span}</span> {props.main}
      </h2>
      <div className="heading__sub">{props.content}</div>
    </div>
  );
};

export default heading;
