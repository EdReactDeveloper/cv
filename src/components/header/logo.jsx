import React from "react";
import image from "../../assets/logo.png";

const logo = () => {
  return (
    <div className="logo-wrapper">
      <div className="logo-box">
        <div>SH</div>
        <div className="logo-imagewrapper">
          <img src={image} alt="logo" className="logo-image" />
        </div>

        <div>PY</div>
      </div>
      <div className="logo-sublogo">shops any where</div>
    </div>
  );
};

export default logo;
