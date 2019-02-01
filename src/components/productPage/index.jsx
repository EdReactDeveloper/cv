import React, { Component } from "react";
import Related from "../UI/product/productBlock";
import NewsLetter from "../UI/newsLetter";
import Heading from "../UI/heading";
import Product from "./cardBlock/index";
import MyContext from "../../container/context";
import Order from "../UI/order";
class Index extends Component {
  static contextType = MyContext;

  componentWillMount() {
    const id = this.props.match.params.id;
    this.context.getItem(id);
  }

  componentDidUpdate(nextProps) {
    const id = this.props.match.params.id;
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.context.getItem(id);
    }
  }

  render() {
    return (
      <div className="productPaged">
        <Order />
        {this.context.card ? <Product item={this.context.card} /> : null}
        <div className="related">
          <div className="container">
            <Heading main="products" span="related" />
            <Related className="product-list" />
            <NewsLetter />
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
