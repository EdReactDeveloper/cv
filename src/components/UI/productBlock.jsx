import React, { Component } from "react";
import Card from "./card";
import { ProductConsumer } from "../UI/context";
class Products extends Component {
  render() {
    return (
      <ul className={this.props.className}>
          <ProductConsumer>
        {value => {
          return value.products
            .slice(0, 4)
            .map((item, i) => <Card item={item} key={i} />);
        }}
      </ProductConsumer>
      </ul>
    
    );
  }
}

export default Products;
