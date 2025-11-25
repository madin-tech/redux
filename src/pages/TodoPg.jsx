import { useSelector } from "react-redux";
import ProfileDrawer from "../components/ProfileDrawer";
import TodoAdd from "../components/TodoAdd"
import TodoList from "../components/TodoList"
import cat from "../assets/no-data.png";
const Todo = () => {
 const { todos } = useSelector((state) => state.todoReducer);
  return (
    <section>
      {todos.length == 0 ? (
        <div
          style={{
            display: `flex `,
            flexDirection: `column`,
            alignItems: `center`,
            justifyContent: `center`,
            marginBottom: `205px`,
          }}
        >
          <img style={{ height: 250, width: 250 }} src={cat} alt="" />
          <h3>No Todos yet</h3>
        </div>
      ) : (
        <TodoList />
      )}
      <ProfileDrawer />
    </section>
  );
}

export default Todo