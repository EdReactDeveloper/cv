import React, { Component } from "react";
import Related from "../UI/productBlock";
import NewsLetter from "../UI/newsLetter";
import Heading from "../UI/heading";
import Product from "./product";
import MyContext from "../UI/context";
class Index extends Component {
  state = {
    card: null,
    id: null
  };

  static contextType = MyContext;

  componentWillMount() {
    const id = this.props.match.params.id
   
    this.setState({
      id
    })
    this.getCard(id);
  }


  componentDidUpdate(nextProps){
    const id = this.props.match.params.id
    if(nextProps.match.params.id !== this.props.match.params.id){
      this.getCard(id);
    }  
  }

  getCard = (id) => {
    const list = { ...this.context.products };
    let card;
    for (let key in list) {
      if (list[key].id === Number(id)) {
        card = list[key];
        this.setState({
          card
        });
      }
    }
  };

  render() {
    return (
      <div className="productPaged">
        <Product item={this.state.card} />
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
