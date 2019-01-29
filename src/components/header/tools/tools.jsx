import React, { Component } from "react";
import MyContext from "../../UI/context";
import Icons from './iconbox';
import Autocomplete from "../autocomplete";

// import Search from './search'; 
class Tools extends Component {
  state = {
    showInput: false,
    inputvalue: ""
  };

  static contextType = MyContext;

  searchOpen = () => {
    if (!this.state.showInput) {
      document.addEventListener("click", this.handleOutSideClick);
    } else {
      document.removeEventListener("click", this.handleOutSideClick);
      this.setState({
        inputvalue: ""
      });
    }
    this.setState(prevState => ({
      showInput: !prevState.showInput
    }));
  };

  handleOutSideClick = e => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.searchOpen();
  };

  inputHandler = e => {
    this.setState({
      inputvalue: e.target.value
    });
  };

  render() {
    let list = this.context.products.filter(item => {
      return (
        item.heading.toLowerCase().indexOf(this.state.inputvalue) !== -1 ||
        item.heading.indexOf(this.state.inputvalue) !== -1
      );
    });
    return (
      <div className="tools">
       <div className={`search__module ${this.state.showInput ? 'display': null}`} 
       onClick={()=>this.searchOpen()}>
    </div>

    <form
      className={`tools__searchform ${
        this.state.showInput ? "tools__searchform-showinput" : ""
      }`}
    >
      <input
        type="text"
        placeholder="search..."
        className="tools__searchbar"
        ref={ref => {
          this.node = ref;
        }}
        value={this.state.inputvalue}
        onChange={e => this.inputHandler(e)}
      />
      <Autocomplete list={list} />
    </form>
        {/* <Search 
        showInput={this.state.showInput}
        list={list}
        node={this.node}
        inputvalue={this.state.inputvalue}
        inputHandler={this.inputHandler}
        searchOpen={this.searchOpen}
        /> */}
        <Icons
        searchOpen={this.searchOpen}
        />
      </div>
    );
  }
}

export default Tools;
