import { createStore } from "redux";

export const increment = () => {
  return { type: "COUNTER/INCREMENT" };
};

export const decrement = () => {
  return { type: "COUNTER/DECREMENT" };
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(counterReducer);
