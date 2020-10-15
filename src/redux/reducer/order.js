import { DECREMENT, INCREMENT, DELETE_ITEM } from '../constants';

const updateOrderItems = (orderItems, item, idx) => {
  if (item.amount <= 0) {
    return [...orderItems.slice(0, idx), ...orderItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...orderItems, item];
  }

  return [...orderItems.slice(0, idx), item, ...orderItems.slice(idx + 1)];
};

const updateOrderItem = (payload, item = {}, state, itemsCount) => {
  const {
    id = payload.id,
    name = payload.name,
    amount = item.amount || 0,
  } = item;

  return {
    id,
    name,
    amount: itemsCount + amount,
    price: payload.price,
    totalPrice: amount ? payload.price * (itemsCount + amount) : payload.price,
  };
};

const updateOrder = (state, payload, booksCount) => {
  const itemId = payload.id;
  const itemIdx = state.findIndex((item) => item.id === itemId);
  const item = state[itemIdx];
  let newItem = updateOrderItem(payload, item, state, booksCount);

  return [...updateOrderItems(state, newItem, itemIdx)];
};

// { [productId]: amount }
export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return updateOrder(state, payload, 1);

    case DECREMENT:
      return updateOrder(state, payload, -1);

    case DELETE_ITEM:
      const item = state.find((item) => item.id === payload.id);
      return updateOrder(state, payload, -item.amount);

    default:
      return state;
  }
};
