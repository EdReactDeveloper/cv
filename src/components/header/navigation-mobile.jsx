import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

const nav = [
    { title: "Home", link: "/" },
    { title: "Products", link: "/products" },
    { title: "Hot Deals", link: "/hot_deals" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" }
  ];

class NavigationMobile extends Component {
  state={
    windowOpen: false,
  }

  toggleWindow = () => {
    this.setState({
      windowOpen: !this.state.windowOpen
    })
   };
 
  render(){

    return (
      <div className="tools__mobile" onClick={()=>this.toggleWindow()}>
          <div className="tools__mobile-icon">
            <div />
            <div />
            <div />
          </div>
          {this.state.windowOpen ? (
            <ul className="tools__mobile-list">
              <button
                className="tools__mobile-closebtn"
                onClick={()=>this.toggleWindow()}
                >
                X
              </button>
              {nav.map((item, i) => (
                <li className="tools__mobile-item" key={i}>
                  <NavLink
                    to={item.link}
                    exact
                    activeClassName="my-active"
                    className="tools__mobile-link"
                    >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
    );
  }
};

export default NavigationMobile;