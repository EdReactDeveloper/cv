import React from "react";

const heading = ({span, content, main, style}) => {
  return (
    <React.Fragment>
       <h2 className="heading" style={style}>
        <span> {span}</span> {main}
      </h2>
      <div className="heading__sub">{content}</div>
    </React.Fragment>
  );
};

export default heading;
