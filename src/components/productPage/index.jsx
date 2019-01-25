import React, { Component } from "react";
import ProductPage from "./productPage";
import { data } from "../data";

class ProductCard extends Component {
  state = {
    isLoading: true,
    card: [],
    list: []
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    const list = { ...data };
    let card;
    for (let key in list) {
      if (list[key].id === Number(id)) {
        card = list[key];
      }
    }
    this.setState({
      list: data,
      card,
      isLoading: false
    });
  }

  render() {
    let loader = <div>loading</div>;
    return (
      <div>
        {!this.state.isLoading && this.state.card ? (
          <ProductPage data={this.state.card} list={this.state.list} />
        ) : (
          loader
        )}
      </div>
    );
  }
}

export default ProductCard;
