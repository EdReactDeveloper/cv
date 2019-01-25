import React, { Component } from "react";
import ProductPage from "./productPage";
import {data} from '../data'; 

class ProductCard extends Component {
  state = {
      isLoading: true, 
    card: [],
    list: [
      
    ]
  };

  componentDidMount(){
    console.log('mount')
    const id = this.props.match.params.id;
    console.log(id)
    const list = { ...data};
    let card;
    for (let key in list) {
      if (list[key].id === Number(id)) {
        card = list[key];
      }
    }
    this.setState({
      list: data,
      card, isLoading: false
    });
    console.log(this.state.card)
  }
  

  render() {
    console.log('render')
      let loader = <div>loading</div>
    return (
      <div>
        {!this.state.isLoading && this.state.card ? <ProductPage data={this.state.card} list={this.state.list}/> : loader}
      </div>
    );
  }
}

export default ProductCard;
