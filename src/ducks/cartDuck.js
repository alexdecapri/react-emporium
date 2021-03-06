const ADD_PRODUCT = 'cart/ADD_PRODUCT';
const REMOVE_PRODUCT = 'cart/REMOVE_PRODUCT';
const CHECKOUT = 'cart/CHECKOUT';

const initialState = {
  productsInCart: [],
  runningTotal: 0
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_PRODUCT:
      return {
        productsInCart: [ ...state.productsInCart, action.product],
        runningTotal: state.runningTotal + action.product.price
      }
    case REMOVE_PRODUCT:
      return {
        productsInCart: state.productsInCart.filter ( product => product._id !== action.product._id ),
        runningTotal: state.runningTotal - action.product.price
      }
  }
}

export default addProduct(product) {
  type: ADD_PRODUCT,
  product
}

export default removeProduct(product) {
  type: REMOVE_PRODUCT,
  product
}

export default checkout() {
  type: CHECKOUT
}
