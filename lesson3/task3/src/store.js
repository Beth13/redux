import { createStore, combineReducers } from "redux";
import cartReducer from "./cart.reducer.js";
import languageReducer from "./language.reducer.js";
import usersReducer from "./user.reducer.js";

const appReducer = combineReducers({
  cart: cartReducer,
  user: usersReducer,
  language: languageReducer,
});

const store = createStore(appReducer);

export default store;
