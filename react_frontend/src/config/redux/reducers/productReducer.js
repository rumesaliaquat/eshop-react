const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleProdLoading: false,
  isSingleProdError: false,
  singleProduct: {},
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_PRODUCTS":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };

    case "SET_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleProdLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleProdLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleProdLoading: false,
        isSingleProdError: true,
      };

    default:
      return state;
  }
}

export default productReducer;
