import React from "react";
import Autocomplete from "../autocomplete";

const search = ({showInput, searchOpen, node, list, inputvalue, inputHandler}) => {
  return (
    <form
      className={`tools__searchform ${
        showInput ? "tools__searchform-showinput" : ""
      }`}
    >
      <input
        type="text"
        placeholder="search..."
        className="tools__searchbar"
        ref={ref => {
          this.node = ref;
        }}
        value={inputvalue}
        onChange={e => inputHandler(e)}
      />
      <Autocomplete list={list} />
    </form>
  );
};

export default search;
