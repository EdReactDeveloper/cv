import React, { Component } from "react";
import { data } from "../data";
import Card from "./card";

class Products extends Component {
  state = {
    isLoading: true,
    products: []
  };

  componentDidMount() {
    const products = data
    this.setState({
      products,
      isLoading: false
    });
  }
  render() {
    const loading = <div>loading</div>;
    const list = [...this.state.products]
    return (
      <div>
        {!this.state.isLoading ? (
          <ul className="product-list">
            {list.splice(0,4).map((item, i) => (
              <Card item={item} key={i} />
            ))}
          </ul>
        ) : (
          loading
        )}
      </div>
    );
  }
}

export default Products;
