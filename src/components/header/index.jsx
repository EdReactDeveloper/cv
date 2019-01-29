import React, { Component } from "react";
import Logo from "./logo";
import Navigation from './navigation'; 
import Tools from './tools/tools';
import Contacts from './contacts'; 
import NavigationMobile from './navigation-mobile';

class Header extends Component {
    
  render() {
    return (
      <div className="header">
        <Contacts />
        <div className="header__navigation">
          <div className="container">
            <div className="header__navigation-wrapper">
              <Logo />
              <Navigation />
              <NavigationMobile/>
              <Tools/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
