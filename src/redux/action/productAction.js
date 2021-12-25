import { ActionType } from "../ActionTypes/action-types"


export const setProducts = (products) => {
    return {
        type: ActionType.SET_PRODUCTS,
        payload: products
    }
}

export const addToCart = (product) => {
    return {
        type: ActionType.ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (productId) => {
    return {
        type: ActionType.REMOVE_FROM_CART,
        payload: productId
    }
}