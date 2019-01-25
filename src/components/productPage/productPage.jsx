import React, { Component } from "react";
import Image from "./image";
import Descripiton from "./description";
import Related from "../UI/productBlock";
import NewsLetter from "../UI/newsLetter";
import Heading from "../UI/heading";
class ProductPage extends Component {
  state = {
    isLoading: true,
    image: "",
    data: [],
    list: []
  };

  componentDidMount() {
    window.scrollTo(0,200)
    this.setState({
      data: this.props.data,
      image: this.props.data.images[0],
      list: this.props.list,
      isLoading: false
    });
  }

  chooseImage = i => {
    this.setState({
      image: this.state.data.images[i]
    });
  };

  render() {
    let content = <div>laoding</div>;
    if (!this.state.isLoading) {
      content = (
        <div className="productPaged">
          <div className="productPage__background">
            <div className="container">
              <div className="productPage__wrapper">
                <Image
                  data={this.state.data.images}
                  image={this.state.image}
                  chooseImage={this.chooseImage}
                />
                <Descripiton data={this.state.data} />
              </div>
            </div>
          </div>
          <div className="related">
            <div className="container">
              <Heading main="products" span="related" />
              <Related />
              <NewsLetter />
            </div>
          </div>
        </div>
      );
    }
    return content;
  }
}

export default ProductPage;
