import { useSelector, useDispatch } from "react-redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const todoState = useSelector((state) => state);
  const dispatch = useDispatch();
  const addTodo = (task) => {
    dispatch(addTodoAction(task));
  };
  const deleteTodo = (task) => {};

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todoState} deleteTodo={deleteTodo} />
    </>
  );
};

export default Todo;
