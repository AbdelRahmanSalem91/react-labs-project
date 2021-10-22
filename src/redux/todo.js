import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

export const addTodoAction = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const removeTodoAction = (payload) => {
  return {
    type: REMOVE_TODO,
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
    case REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo, i) => i !== action.payload)],
      };
    default:
      return state;
  }
};

export const store = createStore(todoReducer);
