import { createStore } from "redux";

const INCREMENT_COUNT = "INCREMENT_COUNT";

export const incrementCount = (payload) => {
  return {
    type: INCREMENT_COUNT,
    payload,
  };
};

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

const store = createStore;
