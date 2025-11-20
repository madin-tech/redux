import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import TodoList from "./TodoList";
import { useRef } from "react";
const TodoAdd = () => {
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
  ref.current.reset();
 
}
  return (
    <>
      <div style={{display:`flex`, alignItems:`center`, justifyContent:`center`}}>
        <form action="" onSubmit={handleSubmit} ref={ref} >
          <input type="text" placeholder="todo kiriting" />
          <button type="submit">add</button>
        </form>
      </div>
    </>
  );
}

export default TodoAdd;