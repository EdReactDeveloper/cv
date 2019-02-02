import React from "react";
import Icon from "../../UI/icon/Icon";
import { Link } from "react-router-dom";
import { NavIcon } from "../../UI/icon/Selection";
import { ProductConsumer } from "../../../container/context";
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
                <span className='tools__note'
                 style={{display: value.cart.length > 0 ? 'block' : 'none'}}
                >{value.cart.length}</span>
              );
            }}
          </ProductConsumer>
        </Link>
      </div>
    </div>
  );
};

export default iconbox;
