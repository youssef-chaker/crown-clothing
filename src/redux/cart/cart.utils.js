export const addItemToCart = (items, itemToAdd) => {
  const existingCartItem = items.find((item) => item.id === itemToAdd.id);
  if (existingCartItem) {
    return items.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: ++item.quantity } : item
    );
  }
  return [...items, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (items, itemToRemove) => {
  return items.filter((item) => item.id !== itemToRemove.id);
};

export const reduceItemCount = (items, itemToReduce) => {
  if (itemToReduce.quantity > 1) {
    return items.map((item) =>
      item.id === itemToReduce.id
        ? { ...item, quantity: --item.quantity }
        : item
    );
  } else {
    return removeItemFromCart(items, itemToReduce);
  }
};
