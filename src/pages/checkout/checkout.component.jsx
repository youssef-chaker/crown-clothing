import React from "react";
import "./checkout.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({ items, total, dispatch }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Products</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {items.map((item) => (
      <CheckoutItem key={item.id} checkoutItem={item}></CheckoutItem>
    ))}
    <div className="total">
      <span>TOTAL : {total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
