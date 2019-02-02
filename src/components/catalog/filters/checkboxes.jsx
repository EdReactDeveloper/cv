import React from "react";

const checkboxes = ({title, list}) => {
  
  return (
    <div className="brands__wrapper">
      <h3 className="filters__heading">{title}</h3>
      <ul className="brands__list">
        {list.map((item, i) => (
          <li className="filters__listitem" key={i}>
            <input
              type="checkbox"
              id={item.name}
              className="filters__checkbox"
            />
            <label htmlFor={item.name}>{item.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default checkboxes;
