import React from "react";
import Icons from './iconbox';
import {Link} from 'react-router-dom'; 

const productCard = props => {
  const item = props.item;
  const scrollup =()=>{
    window.scrollTo(0,200)
  }
  return (
    <li className="product-card"
    onClick={scrollup}
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
            <Icons className="product"/>
      </Link>
    </li>
  );
};

export default productCard;
