import React from "react";

const brands = props => {
  const list = props.brands;
  return (
    <div className="brands__wrapper">
      <h3 className="filters__heading">Brands</h3>
      <ul className="brands__list">
        {list.map((item, i) => (
          <li className="filters__listitem" key={i}>
            <input
              type="checkbox"
              id={item.brand}
              className="size__checkbox"
            />
            <label htmlFor={item.brand}>{item.brand}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default brands;
