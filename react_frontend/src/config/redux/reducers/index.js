import productReducer from "./productReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productReducer
});

export default rootReducer;




// ========= redux toolkit =========
// import { createSlice } from "@reduxjs/toolkit";

// export const productSlice = createSlice({
//   name: "product",
//   initialState: {
//     products: [],
//   },
//   reducers: {
//     SET_PRODUCTS: (state, action) => {
//       return {
//         ...state,
//         products: action.payload,
//       };
//     },
//   },
// });
