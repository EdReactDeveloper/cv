import React, { Component } from "react";
import MyContext from "../../../container/context";

class Counter extends Component {
  static contextType = MyContext;
  render() {
    const { id } = this.props;
    return (
      <div className="counter__wrapper">
        <button
          className="counter__button"
          disabled={this.context.card.count < 2}
          onClick={() => this.context.counter(id, 'minus')}
        >
          -
        </button>
        <div className="counter__display">{this.context.card.count}</div>
        <button
          className="counter__button"
          onClick={() => this.context.counter(id, 'plus')}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
