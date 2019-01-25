import React, { Component } from "react";
import Logo from "./logo";
import List from "./list";
import Payment from "./payment";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__wrapper container">
          <Logo />
          <List />
          <Payment />
        </div>
      </div>
    );
  }
}

export default Footer;
