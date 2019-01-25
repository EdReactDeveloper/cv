import React from "react";
import Card from "../UI/card";

const relatedProducts = props => {
  const data = [...props.data];
  console.log(data)
  return (
    <div className="related__wrapper">
      <h2 className="related__heading">
        <span>RELATED</span> PRODUCTS
      </h2>
      <div className="related__subheading">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </div>
      <ul className="related__list">
        {data.splice(0, 4).map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default relatedProducts;
