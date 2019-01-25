import React from "react";
import Icon from "./Icon";
import { Product } from "./Selection";
import {Link} from 'react-router-dom'; 

const productCard = props => {
  const item = props.item;
  return (
    <li className="product-card"
    onClick={props.clicked}
    >
      <Link to={`/products/${item.id}`}  className="product-card-front card-side">
        <img
          src={item.images[0]}
          className="product-card-front-image"
          alt="image is missing"
        />
        <h3 className="product-card-front-heading">{item.heading}</h3>
        <div className="product-card-front-price">${item.price}</div>
      </Link>

      <Link to={`/products/${item.id}`}  className="product-card-back card-side">
        <img
          src={item.images[0]}
          className="product-card-back-image"
          alt="image is missing"
        />
        <h3 className="product-card-back-heading">{item.heading}</h3>
        <ul className="product-card-back-size">size:
        {item.sizes.map((item, i)=>(
          <div className="product-card-back-size-wrapper" key={i}>
          <label className="product-card-back-size-label">{item}</label><span>-</span></div>
          
        ))}  
         </ul>
        <div className="product-card-back-colorswrapper">
          {item.colors.map((color, k) => (
            <div
              className="product-card-back-color"
              style={{ background: color }}
              key={k}
            />
          ))}
        </div>
            <div className="product-card-back-price">
           ${item.price}
            </div>
        <div className="product-card-back-buttons">
          <Icon d={Product.internet} className="product-card-back-icon" />
          <Icon d={Product.cart} className="product-card-back-icon" />
          <Icon d={Product.heart} className="product-card-back-icon" />
        </div>
      </Link>
    </li>
  );
};

export default productCard;
