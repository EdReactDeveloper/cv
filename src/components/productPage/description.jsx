import React from 'react';
import Icon from "../UI/Icon";
import { Product } from "../UI/Selection";

const productDescription = (props) => {
    const data = props.data; 
    return (
        <div className="card__right">
              <h3 className="card__right-heading">{data.heading}</h3>
              <span className="card__right-subheading">{data.subheading}</span>
              <div className="card__right-description">{data.description}</div>

              <div className="card__right-options--wrapper">
                <div className="card__right-options--left">
                  <span className="card__right-options--label">
                    Choose Size
                  </span>
                  <div className="card__right-options--buttons">
                    {data.sizes.map((item, i) => (
                      <div
                        className="card__right-options--button-wrapper"
                        key={i}
                      >
                        <button className="card__right-options--button">
                          {item}
                        </button>
                        <span className="card__right-options--dash">-</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="card__right-options--right">
                  <span className="card__right-options--label">
                    Choose Quantity
                  </span>
                  <button className="card__right-options--calc">+</button>
                  <div className="card__right-options--number">
                    {data.quantity}
                  </div>
                  <button className="card__right-options--calc">-</button>
                </div>
              </div>

              <div className="card__right-order--wrapper">
                <div className="card__right-order--price">
                  Price: ${data.price}
                </div>
                <Icon
                  d={Product.internet}
                  className="card__right-order--icon"
                />
                <Icon d={Product.cart} className="card__right-order--icon" />
                <Icon d={Product.heart} className="card__right-order--icon" />
                <button className="card__right-order--button">Order Now</button>
              </div>
            </div>
    );
};

export default productDescription;