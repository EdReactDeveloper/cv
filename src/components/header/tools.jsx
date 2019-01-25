import React from "react";
import Icon from "../UI/Icon";
import { NavLink } from "react-router-dom";
import { NavIcon } from "../UI/Selection";

const nav = [
  { title: "Home", link: "/" },
  { title: "Products", link: "/products" },
  { title: "Hot Deals", link: "/hot_deals" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" }
];



const tools = props => {
  const toggleWindow = () => {
    props.toggleWindow()
  };

  return (
    <div className="tools">
      <div className="tools-iconbox" />
      <Icon d={NavIcon.search} className="tools-icon" />
      <Icon d={NavIcon.profile} className="tools-icon" />
      <div className="tools__busket">
        <Icon d={NavIcon.busket} className="tools-icon" />
        <span className="tools__busket-note">12</span>
      </div>


      <div className="tools__mobile" onClick={() => toggleWindow()}>
        <div className="tools__mobile-icon">
        <div></div>
        <div></div>
        <div></div>
        </div>
        {props.open ? (
          <ul className="tools__mobile-list">
          <button 
            className="tools__mobile-closebtn"
            onClick={()=>toggleWindow()}>X</button>
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
    </div>
  );
};

export default tools;
