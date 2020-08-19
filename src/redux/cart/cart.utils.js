export const addItemToCart = (items, itemToAdd) => {
  const existingCartItem = items.find((item) => item.id === itemToAdd.id);
  if (existingCartItem) {
    return items.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: ++item.quantity } : item
    );
  }
  return [...items, { ...itemToAdd, quantity: 1 }];
};
