import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import TodoList from "./TodoList";
import { Button, Input } from "antd";
import { useRef, useState } from "react";
const TodoAdd = () => {
  const [value, setValue] = useState("");  
    

 const dispatch = useDispatch();
  const ref =useRef();
 
 function handleSubmit(e){
  e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: e.target[0].value,
      checked: false  
    }
  dispatch(addTodo(newTodo));
 setValue("");

 
 
}
  return (
    <>
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
        }}
      >
        <form
          action=""
          onSubmit={handleSubmit}
          ref={ref}
          style={{ display: `flex`, flexDirection: `row`, gap: 6 }}
        >
          <Input
            type="text"
            value={value}
            placeholder="Enter image url"
            onChange={(e) => setValue(e.target.value)}
          />
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </form>
      </div>
    </>
  );
}

export default TodoAdd;