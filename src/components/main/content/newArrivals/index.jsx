import React, { Component } from "react";
import Promos from "./promos"; 
import Button from '../../../UI/extendButton';
import Heading from '../../../UI/heading';
import ProductList from '../../../UI/productBlock'; 

class NewArrivals extends Component {
  render() {
    return (
     
        <div className="content__wrapper">
          <Heading
          span="new" main="arrivals" 
          content="lorem Ipsum is just a dummy text of the printing and typesetting
          industry"
          />
          <div className="content__productbox">
            <div className="content__product-wrapper">
              <ProductList className='product-list' />
             <Button />
              <Promos />
            </div>
          </div>
        </div>
    
    );
  }
}

export default NewArrivals;
