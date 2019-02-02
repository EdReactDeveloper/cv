import React, { Component } from "react";


import Front from './front'; 
import Back from './back';

class ProductCard extends Component {
  scrollup = () => {
    window.scrollTo(0, 200);
  };

  render() {
    const { item } = this.props;
    return (
      <li className="card" onClick={this.scrollup}>
       <Front item={item}/>
       <Back item={item}/> 
      </li>
    );
  }
}

export default ProductCard;
