import { useDispatch } from "react-redux"
import { delTodo, editTodo } from "../store/todoSlice";
import { toggleTodo } from "../store/todoSlice";
import { useState } from "react";
const Todo = ({todo}) => {
const dispatch = useDispatch();
const [editId, setEditId] = useState(null);
const [value, setValue] = useState(todo.title);

function handleSave(){
  const editedTodo = {
    id: editId,
    title: value
  }

 
  
dispatch(editTodo(editedTodo));



setEditId(null);

}

return (
  <div
    style={{
      display: `flex`,
      flexDirection: `row`,
      gap: `20px`,
      alignItems: `center`,
    }}
  >
    <input
      type="checkbox"
      onChange={() => dispatch(toggleTodo(todo.id))}
      defaultValue={todo.checked}
    />
    {!editId ? (
      <h5 style={{ textDecoration: todo.checked ? "line-through" : "none" }}>
        {todo.title}
      </h5>
    ) : (
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    )}
    <button onClick={() => dispatch(delTodo(todo.id))}>del</button>
    {!editId ? (
      <button onClick={() => setEditId(todo.id)}>edit</button>
    ) : (
      <button onClick={handleSave}>save</button>
    )}
  </div>
);
}

export default Todo