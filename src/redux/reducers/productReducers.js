import { ActionType } from "../ActionTypes/action-types";

const initialState = {
  allProducts: [],
  cart: [],
  totalPrice: 0,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS: {
      const newState = { ...state, allProducts: [...payload] };
      return newState;
    }
    case ActionType.ADD_TO_CART: {
      const existingProduct = state.cart.find((pd) => pd.id === payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
        const remainingProduct = state.cart.filter(
          (product) => product.id != payload.id
        );
        const newState = {
          ...state,
          cart: [...remainingProduct, existingProduct],
          totalPrice: (state.totalPrice += payload.price),
        };
        return newState;
      } else {
        const newState = {
          ...state,
          cart: [...state.cart, payload],
          totalPrice: (state.totalPrice += payload.price),
        };
        return newState;
      }
    }
    case ActionType.REMOVE_FROM_CART: {
      const newCart = state.cart.filter((item) => item.id != payload);
      const removeProduct = state.cart.find((item) => item.id == payload);
      const totalPrice = parseFloat((state.totalPrice).toFixed(2)) - parseFloat((removeProduct.price).toFixed(2) * removeProduct.quantity);
      const numberPrice = parseFloat(totalPrice.toFixed(2));
      const newState = { ...state, cart: newCart, totalPrice: numberPrice};
      return newState;
    }
    default: {
      return state;
    }
  }
};
