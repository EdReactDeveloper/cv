import React from "react";
import cards from "../../assets/payment.png";

const payment = () => {
  return (
    <div className="payment">
      <h3 className="payment__heading">Payment Methods</h3>
      <img src={cards} alt="is missing" className="payment__image" />
    </div>
  );
};

export default payment;
