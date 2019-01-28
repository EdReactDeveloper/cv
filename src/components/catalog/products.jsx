import React from "react";
import Card from "../UI/card";
import Button from "../UI/extendButton";
const products = props => {
  return (
    <ul className="catalog__list">
    {props.products.map((item, i)=>(
      <Card item={item} key={i}/>
    ))}
      <Button />
    </ul>
  );
};

export default products;
