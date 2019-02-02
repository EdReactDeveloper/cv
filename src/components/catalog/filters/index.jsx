import React, { Component } from "react";
import Checkboxes from "./checkboxes";
import Price from "./price";
import Categories from "./categories";

class Filters extends Component {
  state = {
    categories: [
      { title: "All", active: "yes" },
      { title: "Men", active: "no" },
      { title: "Women", active: "no" },
      { title: "Children", active: "no" },
      { title: "Hot Deals", active: "no" }
    ],
    pricefilter: { from: 100, to: 1000 },
    sizes: [
      { name: "Small", active: "no" },
      { name: "Medium", active: "no" },
      { name: "Large", active: "no" },
      { name: "X Large", active: "no" }
    ],
    brands: [
      { name: "Reebok", active: "no" },
      { name: "Adidas", active: "no" },
      { name: "Nike", active: "no" },
      { name: "Active", active: "no" }
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
      <div
        className={`catalog__filters-wrapper 
        ${this.props.open ? "display" : ""}
      `}
      >
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
            <Checkboxes title="Sizes" list={this.state.sizes} />
          </div>
          <div className="catalog__filters-block">
            <Checkboxes title="Brands" list={this.state.brands} />
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
