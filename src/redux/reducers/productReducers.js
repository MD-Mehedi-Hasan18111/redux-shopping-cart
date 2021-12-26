import { ActionType } from "../ActionTypes/action-types";

const initialState = {
  allProducts: [],
  cart: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS: {
      const newState = { ...state, allProducts: [...payload] };
      return newState;
    }
      case ActionType.ADD_TO_CART: {
          
          const existingProduct = state.cart.find(pd => pd.id === payload.id);
          
          if (existingProduct) {
              existingProduct.quantity += 1;
              const remainingProduct = state.cart.filter(product => product.id != payload.id);
              const newState = { ...state, cart: [...remainingProduct, existingProduct] };
              return newState;
          }
          else {
            const newState = { ...state, cart: [...state.cart, payload] };
            return newState;
          }
    }
    case ActionType.REMOVE_FROM_CART: {
      const newCart = state.cart.filter((item) => item.id != payload);
      const newState = { ...state, cart: newCart };
      return newState;
    }
    default: {
      return state;
    }
  }
};
