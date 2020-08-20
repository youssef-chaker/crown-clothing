import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.items
);

export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
  items.reduce((acc, prev) => acc + prev.quantity, 0)
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

// export const selectCartTotal = createFactory([selectCartItems], (items) =>
//   items.reduce(
//     (acc, prev) =>
//       acc + prev.quantity * prev.price,
//     0
//   )
// );

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
