import cartActionTypes from "./cart.types";
import {
  addItemToCart,
  removeItemFromCart,
  reduceItemCount,
} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  items: [],
};
const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload),
      };
    case cartActionTypes.REDUCE_ITEM:
      return {
        ...state,
        items: reduceItemCount(state.items, action.payload),
      };
    default:
      return state;
  }
};

export default CartReducer;
