const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT/ADD":
      return {
        ...state,
        products: state.products.concat(action.payload),
      };
    case "PRODUCT/REMOVE":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
