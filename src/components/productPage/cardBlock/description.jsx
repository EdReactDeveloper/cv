import React from "react";
import Icons from "../../UI/icon/iconbox";
import OrderNow from "../../UI/order/orderBtn";
import Counter from "../../UI/product/counter";
import Colors from "../../UI/product/color";
import Sizes from "../../UI/product/size";
const productDescription = props => {
  const data = props.data;

  return (
    <div className="productPage__right">
      <h3 className="productPage__right-heading">{data.heading}</h3>
      <span className="productPage__right-subheading">{data.subheading}</span>
      <div className="productPage__right-description">{data.description}</div>

      <div className="productPage__right-options--wrapper">
        <div className="productPage__right-options--left">
          <Colors data={data} />
          <Sizes data={data} />
        </div>
        <div className="productPage__right-options--right">
          <Counter id={data.id} />
        </div>
      </div>

      <div className="productPage__right-order--wrapper">
        <div className="productPage__right-order--price">
          Price: ${data.price}
        </div>
        <Icons className="productPage" id={data.id} inCart={data.inCart} />
        <OrderNow id={data.id} />
      </div>
    </div>
  );
};

export default productDescription;
