import React, { Component } from "react";
import Filters from "./filters";
import Products from "./products";
import { data } from "../data";
import NewsLetter from "../UI/newsLetter";
class Catalog extends Component {
  state = {
    isLoading: true,
    cards: [],  
    filteredList: [],
    categryFilter: 'All'   
  };

  componentDidMount() {
    this.setState({
      cards: [...data],     
      filteredList: [...data],
      isLoading: false, 
      menuOpen: false
    });
  }

  filterCategory=(category)=>{
      
      const list = this.state.cards.filter(item=>{
        console.log(item.category, '==', category)
        return item.category === category; 
      })
      console.log(list)
      this.setState({
        filteredList: category === 'All' ? [...data] : list
         
      })
  }

  toggleMenu=()=>{
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render() {
    console.log(this.state.menuOpen)
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
