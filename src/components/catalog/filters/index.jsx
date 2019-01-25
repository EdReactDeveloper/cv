import React, { Component } from "react";
import Brands from "./brands";
import Size from "./size";
import Price from "./price";
import Categories from "./categories";

class Filters extends Component {
  state = {
    categories: [
      { title: "All", active: "yes" },
      { title: "Man", active: "no" },
      { title: "Woman", active: "no" },
      { title: "Children", active: "no" },
      { title: "Hot Deals", active: "no" }
    ],
    pricefilter: { from: 100, to: 1000 },
    size: [
      { size: "Small", active: "no" },
      { size: "Medium", active: "no" },
      { size: "Large", active: "no" },
      { size: "X Large", active: "no" }
    ],
    brands: [
      { brand: "Reebok", active: "no" },
      { brand: "Adidas", active: "no" },
      { brand: "Nike", active: "no" },
      { brand: "Active", active: "no" }
    ]
  };
  filterCategory = category => {
    this.props.filterCategory(category);

    const active = [...this.state.categories];
    for (let key in active) {
      if (active[key].title === category) {
        active[key].active = "yes";
      } else {
        active[key].active = "no";
      }
    }

    this.setState({
      categories: active
    });
  };

  render() {
    return (
      <div className={`catalog__filters-wrapper 
        ${this.props.open ? 'display' : ''}
      `}>
        <div className="catalog__filters">
          <div className="catalog__filters-block">
            <Categories
              categories={this.state.categories}
              filterCategory={this.filterCategory}
            />
          </div>
          <div className="catalog__filters-block">
            <Price price={this.state.pricefilter} />
          </div>
          <div className="catalog__filters-block">
            <Size size={this.state.size} />
          </div>
          <div className="catalog__filters-block">
            <Brands brands={this.state.brands} />
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
