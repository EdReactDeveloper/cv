import React, { Component } from "react";
import Image from "./image";
import Descripiton from "./description";
import Related from "./relatedProducts";
import NewsLetter from '../UI/newsLetter';
class ProductPage extends Component {
  state = {
    isLoading: true,
    image: "",
    data: [],
    list: []
  };

  componentDidMount() {
    window.scrollTo(0,0)
    this.setState({
      data: this.props.data,
      image: this.props.data.images[0],
      list: this.props.list, 
      isLoading: false
    });
  }

  componentDidUpdate(){
 window.scrollTo(0,0)
  }

  chooseImage = i => {
    this.setState({
      image: this.state.data.images[i]
    });
  };

  render() {
    let content = <div>laoding</div>
    if(!this.state.isLoading){
      content = (
        <div className="card">
        <div className="container">
          <div className="card__wrapper">
            <Image
              data={this.state.data.images}
              image={this.state.image}
              chooseImage={this.chooseImage}
            />
            <Descripiton data={this.state.data} />
          </div>
        </div>
        <div className="related">
          <div className="container">
              <Related data={this.state.list} />
              <NewsLetter />
          </div>
        </div>
      </div>
      )
       
    }
    return (
     content
    );
  }
}

export default ProductPage;
