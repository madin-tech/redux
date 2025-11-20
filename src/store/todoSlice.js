import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
    name:"todo",
    initialState: {
        todos: []
    },
    reducers: {
     addTodo:(state, action)=>{
   state.todos = [action.payload, ...state.todos]
     },
     delTodo:(state, action)=>{
    state.todos = state.todos.filter(todo=>todo.id!==action.payload);
    console.log(state.todos);
    
    },
     editTodo:(state, action)=>{
    state.todos = state.todos.map((todo)=>{
           if( todo.id == action.payload.id){
                return {
                  ...todo,
                  title: action.payload.title,
                };
           }
         else {
                    return todo;
                }
                
            })
              console.log(state.todos);
              
     },
     toggleTodo:(state, action)=>{
     state.todos = state.todos.map((todo)=>{
      if (todo.id == action.payload) {
        return {
          ...todo,
          checked: !todo.checked,
        };
      } else {
        return todo;
      }
      
      })
      
        
     },
    
     
    }
     
})

export const { addTodo, delTodo, editTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;