import React, { Component } from "react";
import Icons from "../icon/iconbox";
import { Link } from "react-router-dom";

class ProductCard extends Component {
  scrollup = () => {
    window.scrollTo(0, 200);
  };

  render() {
    const { item } = this.props;
    return (
      <li className="product-card" onClick={this.scrollup}>
        <Link
          to={`/products/${item.id}`}
          className="product-card-front card-side"
        >
        <div className="product-card-front-imagewrapper">
         <img
            src={item.images[0]}
            className="product-card-front-image"
            alt="is missing"
          />
        </div>         
          <h3 className="product-card-front-heading">{item.heading}</h3>
          <div className="product-card-front-price">${item.price}</div>
        </Link>
        
        <Link
          to={`/products/${item.id}`}
          className="product-card-back card-side"
        >
        <div className="product-card-back-imagewrapper">
          <img
              src={item.images[0]}
              className="product-card-back-image"
              alt="is missing"
            />
        </div>          
          <h3 className="product-card-back-heading">{item.heading}</h3>
          <ul className="product-card-back-size">
            size:
            {item.sizes.map((item, i) => (
              <div 
              style={{color: item.active ? 'orange' : ''}}
              className="product-card-back-size-wrapper" key={i}>
                <label className="product-card-back-size-label">{item.name}</label>
                <span>-</span>
              </div>
            ))}
          </ul>
          <div className="product-card-back-colorswrapper">
            {item.colors.map((item, k) => (
              <div
                className="product-card-back-color"                
                style={{ background: item.name }}
                key={k}
              />
            ))}
          </div>
          <div className="product-card-back-price">${item.price}</div>
          <Icons className="product" id={item.id} inCart={item.inCart}/>
        </Link>
      </li>
    );
  }
}

export default ProductCard;
