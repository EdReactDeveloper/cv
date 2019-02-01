import React from 'react';
import Icon from "../../../UI/icon/Icon";
import { Product } from "../../../UI/icon/Selection";
import {Link} from 'react-router-dom'; 
const salesCard = (props) => {
    const item = props.item
    return (
        <li className="sales__product-item">
                <Link to="/" className="sales__product-item-front">
                  <img
                    src={item.img}
                    alt="is missing"
                    className="sales__product-item-img"
                  />
                  <div className="sales__product-item-line" />
                  <div className="sales__product-item-infobox">
                    <h3 className="sales__product-item-infobox-heading">
                      {item.title}
                    </h3>
                    <div className="sales__product-item-stats">
                    <div className="sales__product-item-stats-front">
                      <div className="sales__product-item-stars">
                        {item.stars.map((star, i) => (
                          <Icon d={star} className="sales__product-icon" key={i} />
                        ))}
                      </div>
                      <div className="sales__product-item-price">$100</div>
                    </div>
                    </div>                    
                    <div className="sales__product-item-stats-back">
                      <div className="sales__product-item-stats-hover">
                        <Icon
                          d={Product.cart}
                          className="sales__product-icon-cart"
                        />
                        add to cart
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
    );
};

export default salesCard;