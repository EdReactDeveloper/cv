import React from "react";

const size = props => {
  const list = props.size;
  return (
    <div className="size__wrapper">
      <h3 className="filters__heading">Sizes</h3>
      <ul className="size__list">
        {list.map((item, i) => (
          <li className="filters__listitem" key={i}>
            <input type="checkbox" id={item.size} className="size__checkbox" />
            <label htmlFor={item.size}>{item.size}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default size;
