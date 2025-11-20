import Todo from "./Todo"
import { useSelector } from "react-redux"
const TodoList = () => {
  const {todos} = useSelector((state) => state.todoReducer);
 
   return (
    <div style={{display:`flex`, flexDirection:`column`, gap:`30px`, marginBlock:40, alignItems:`center`, justifyContent:`center`, marginBottom:`240px`}}>
   {
    todos.map((todo)=>(
       <Todo key={todo?.id} todo={todo} />
    ))
   }
    </div>
  )
}

export default TodoList