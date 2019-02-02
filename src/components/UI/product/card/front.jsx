import React from 'react';
import { Link } from "react-router-dom";
const cardfront = ({item}) => {
    return (
        <Link
        to={`/products/${item.id}`}
        className="card-front card-side"
      >
       <img
          src={item.images[0]}
          className="card-front-image"
          alt="is missing"
        />
        <h3 className="card-front-heading">{item.heading}</h3>
        <div className="card-front-price">${item.price}</div>
      </Link>
    );
};

export default cardfront;