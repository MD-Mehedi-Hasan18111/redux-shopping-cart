import { ActionType } from "../ActionTypes/action-types"

const initialState = {
    allProducts: [],
    cart: []
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionType.SET_PRODUCTS: {
            const newState = { ...state, allProducts: [...payload] };
            return newState;
        }
        case ActionType.ADD_TO_CART: {
            const newState = { ...state, cart: [...state.cart, payload] };
            return newState;
        }
        case ActionType.REMOVE_FROM_CART: {
            const newCart = state.cart.filter(item => item.id != payload);
            const newState = { ...state, cart: newCart };
            return newState;
        }
        default: {
            return state;
        }
    }
}