import { useSelector } from "react-redux";
import ProfileDrawer from "../components/ProfileDrawer";
import TodoAdd from "../components/TodoAdd"
import TodoList from "../components/TodoList"

const Todo = () => {
 const { todos } = useSelector((state) => state.todoReducer);
  return (
    <section>
      {todos.length == 0 ? <h1>no Todos</h1> : <TodoList />}
      <ProfileDrawer />
    </section>
  );
}

export default Todo