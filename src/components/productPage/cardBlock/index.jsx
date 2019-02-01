import React, { Component } from "react";
import Image from "./image";
import Descripiton from "./description";
import MyContext, {ProductConsumer} from "../../../container/context";

class Product extends Component {
  state = {
    isLoading: true,
    image: null,
    card: []
  };
  static contextType = MyContext;

  componentWillMount() {
    console.log('product index - componentWillMount')
    this.setState({
      card: this.props.item,
      isLoading: false,
      image: this.props.item.images[0],
    });
  }
  componentDidUpdate(nextProps){
    console.log('product index - componentDidUpdate')
    if(this.props.item !== nextProps.item){
      this.setState({
        card: this.props.item,
        isLoading: false,
        image: this.props.item.images[0],
      });
    }
  }

  chooseImage = i => {
    this.setState({
      image: this.props.item.images[i]
    });
  };

  choooseHandler=(id, item, type)=>{
    this.context.choooseHandler(id, item, type)
  }
  render() {
    const item = this.state.card;
    return (
      <div className="productPage__background">
        <div className="container">
          {this.state.isLoading ? (
            "loading"
          ) : (
            <div className="productPage__wrapper">
              <Image
                data={item.images}
                image={this.state.image}
                chooseImage={this.chooseImage}
              />
              <ProductConsumer>
                {value =>{
                  return value.card ? <Descripiton 
                  data={value.card}                  
                  choooseHandler={this.choooseHandler}
                 
                  /> : null
                }}
              </ProductConsumer>
              
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Product;
