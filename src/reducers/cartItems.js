export const initialState = {
  cart: [],
};

const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      const item = state.cart.find(product => product.id === action.payload.id);
      if (item) {
        return {
          ...state,
          cart: state.cart.map(product =>
            product.id === action.payload.id
              ? {
                  ...product,
                  quantity: product.quantity + 1,
                }
              : product,
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'CART_REMOVE_ITEM':
      const item2 = state.cart.find(
        product => product.id === action.payload.id,
      );
      if (item2.quantity >= 2) {
        return {
          ...state,
          cart: state.cart.map(product =>
            product.id === action.payload.id
              ? {
                  ...product,
                  quantity: product.quantity - 1,
                }
              : product,
          ),
        };
      } 
      if (item2) {
        return {
          ...state,
          cart: state.cart.filter(product => {
            return product.id !== action.payload.id;
          }),
        };
      }
      
    default:
      return state;
  }
};
export default cartItems;
