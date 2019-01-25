import React, { Component } from "react";
import Logo from "./logo";
import Navigation from './navigation'; 
import Tools from './tools';
import Contacts from './contacts'; 

class Header extends Component {
  state={
    open: false
  }

  toggleMenu=()=>{
    this.setState({open: !this.state.open})
  }
  
  render() {
    console.log(this.state.open)
    return (
      <div className="header">
        <Contacts />
        <div className="header__navigation">
          <div className="container">
            <div className="header__navigation-wrapper">
              <Logo />
              <Navigation />
              <Tools toggleWindow={this.toggleMenu} 
              open={this.state.open}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
