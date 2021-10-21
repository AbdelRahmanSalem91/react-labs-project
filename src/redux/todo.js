import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const clear = "CLEAR";

export const addTodoAction = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

export const store = createStore(todoReducer);
