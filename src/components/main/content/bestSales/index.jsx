import React, { Component } from "react";
import { Product } from "../../../UI/Selection";
import img1 from "../../../../assets/images/sales_1.png";
import Card from "./card";
import NewsLetter from "../../../UI/newsLetter";
import Heading from '../../../UI/heading'; 
class BestSales extends Component {
  state = {
    products: [
      {
        title: "Reebok Track Jacket",
        stars: [
          Product.star,
          Product.star,
          Product.star,
          Product.star,
          Product.staroutlined
        ],
        img: img1,
        price: 100
      },
      {
        title: "Reebok Track Jacket",
        stars: [
          Product.star,
          Product.star,
          Product.star,
          Product.star,
          Product.staroutlined
        ],
        img: img1,
        price: 100
      },
      {
        title: "Reebok Track Jacket",
        stars: [
          Product.star,
          Product.star,
          Product.star,
          Product.star,
          Product.staroutlined
        ],
        img: img1,
        price: 100
      }
    ]
  };
  render() {
    return (
      <div className="sales__wrapper">
        <Heading 
       span="new" main='arrivals' 
       content=" Lorem Ipsum is simply dummy text of the printing and typesetting
       industry"
        />  
        <ul className="sales__product-list">
          {this.state.products.map((item, i) => (
            <Card item={item} key={i} />
          ))}
        </ul>
        <NewsLetter />
      </div>
    );
  }
}

export default BestSales;
