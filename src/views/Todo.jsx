import { useSelector } from "react-redux";
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../redux/todo";
function Todo() {
  const todoState = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const addTodo = (task) => {
    dispatch(addTodoAction(task));
  };

  const deleteTodo = (index) => {};

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todoState} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
