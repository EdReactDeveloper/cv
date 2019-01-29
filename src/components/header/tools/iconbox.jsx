import React from "react";
import Icon from "../../UI/Icon";
import { Link } from "react-router-dom";
import { NavIcon } from "../../UI/Selection";
import { ProductConsumer } from "../../UI/context";
const iconbox = ({searchOpen}) => {
  return (
    <div className="tools__iconbox">
      <button className="tools__iconwrapper">
        <Icon
          d={NavIcon.search}
          className="tools-icon"
          clicked={searchOpen}
        />
      </button>
      <Link to="/user" className="tools__iconwrapper">
        <Icon d={NavIcon.profile} className="tools-icon" />
      </Link>

      <div className="tools__iconwrapper">
        <Link to="/cart" className="tools__iconwrapper">
          <Icon d={NavIcon.busket} className="tools-icon" />
          <ProductConsumer>
            {value => {
              return (
                <span className={`tools__note ${value.cart.length > 0 ? 'display' : ''}`}>{value.cart.length}</span>
              );
            }}
          </ProductConsumer>
        </Link>
      </div>
    </div>
  );
};

export default iconbox;
