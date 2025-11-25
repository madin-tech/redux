import { useDispatch } from "react-redux"
import { delTodo, editTodo } from "../store/todoSlice";
import { toggleTodo } from "../store/todoSlice";
import { useState } from "react";
import { Button, Checkbox } from "antd";
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
console.log(todo.checked);

return (
  <div
    style={{
      display: `flex`,
      flexDirection: `row`,
      gap: `20px`,
      alignItems: `center`,
    }}
  >
    <Checkbox
      defaultChecked={todo.checked}
      onChange={() => dispatch(toggleTodo(todo.id))}
    ></Checkbox>
    {!editId ? (
      <div >
        <h4 style={{ textDecoration: todo.checked ? "line-through" : "none" }}>
          {todo.title}
        </h4>
      </div>
    ) : (
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    )}
    <Button
      type="dashed"
      onClick={() => dispatch(delTodo(todo.id))}
      htmlType="submit"
    >
      Delete
    </Button>
    {!editId ? (
      <Button
        type="dashed"
        onClick={() => setEditId(todo.id)}
        htmlType="submit"
      >
        Edit
      </Button>
    ) : (
      <Button type="dashed" onClick={handleSave} htmlType="submit">
        Save
      </Button>
    )}
  </div>
);
}

export default Todo