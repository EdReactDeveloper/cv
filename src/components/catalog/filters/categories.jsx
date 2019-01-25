import React from "react";

const categories = props => {
  const filterCategory = item => {
    props.filterCategory(item);
  };

  const list = props.categories;
  return (
    <ul className="categories__list">
      <h3 className="filters__heading">Categories</h3>
      {list.map((item, i) => (
        <li key={i} className="filters__listitem">
          <button
            className={`categories__button ${item.active === 'yes' ? 'my-active' : '' }`}
            onClick={() => filterCategory(item.title)}
          >
            {item.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default categories;
