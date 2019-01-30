import React, {Component} from "react";
import {NavLink } from 'react-router-dom'; 

const nav = [
  { title: "Home", link: "/" },
  { title: "Products", link: "/products",  },
  { title: "Hot Deals", link: "/deals" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contacts"}
];

class Navigation extends Component {
  render(){

    return (
      <ul className="navigation-list">
      {nav.map((item, i) => (
        <li className="navigation-item" key={i}>
          <NavLink to={item.link} exact activeClassName="my-active" className="navigation-link">
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
};

export default Navigation;
