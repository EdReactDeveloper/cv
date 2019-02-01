import React, { Component } from "react";
import Filters from "./filters";
import Products from "./products";
import NewsLetter from "../UI/newsLetter";
import MyContext from '../../container/context'; 
class Catalog extends Component {
  state = {
    isLoading: true,
    cards: [],  
    filteredList: [],
    categryFilter: 'All'   
  };

  static contextType = MyContext; 

  componentDidMount() {
    this.setState({
      cards: this.context.products,
      filteredList: this.context.products,
      isLoading: false, 
      menuOpen: false
    });
  }

  filterCategory=(category)=>{
      const list = this.state.cards.filter(item=>{
               return item.category === category; 
      })
      this.setState({
        filteredList: category === 'All' ? [...this.state.cards] : list
         
      })
  }

  toggleMenu=()=>{
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render() {
    const loading = <div>loading...</div>;
    return (
      <div className="catalog">
        <div className="container">
        <button className="catalog__mobile-filter"
        onClick={()=>this.toggleMenu()}
        ></button>
        <div className="modal" 
        style={{display: this.state.menuOpen ? 'block' : 'none'}}
        onClick={()=>this.toggleMenu()}
        ></div>
          {!this.state.isLoading ? (
            <div className="catalog__wrapper ">
              <Filters filterCategory={this.filterCategory} open={this.state.menuOpen}/>
              <Products products={this.state.filteredList} />
            </div>
          ) : (
            loading
          )}

          <NewsLetter />
        </div>
      </div>
    );
  }
}


export default Catalog;
