import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "../../components/custom-button/custom-button.component";
import CartItem from "../../components/cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ items, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {items.length ? (
        items.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        dispatch(toggleCartHidden());
        history.push("/checkout");
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
