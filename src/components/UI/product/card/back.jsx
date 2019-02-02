import React from 'react';
import { Link } from "react-router-dom";
import Icons from "../../icon/iconbox";

const cardback = ({item}) => {
    return (
        <Link
        to={`/products/${item.id}`}
        className="card-back card-side"
      >
      
        <img
            src={item.images[0]}
            className="card-back-image"
            alt="is missing"
          />
          
        <h3 className="card-back-heading">{item.heading}</h3>
        <ul className="card-back-size">
          size:
          {item.sizes.map((item, i) => (
            <div 
            style={{color: item.active ? 'orange' : ''}}
            className="card-back-size-wrapper" key={i}>
              <label className="card-back-size-label">{item.name}</label>
              <span>-</span>
            </div>
          ))}
        </ul>
        <div className="card-back-colorswrapper">
          {item.colors.map((item, k) => (
            <div
              className="card-back-color"                
              style={{ background: item.name }}
              key={k}
            />
          ))}
        </div>
        <div className="card-back-price">${item.price}</div>
        <Icons className="card" id={item.id} inCart={item.inCart}/>
      </Link>
    );
};

export default cardback;