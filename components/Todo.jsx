import { useState } from "react"
import Form from "./Form";
import TodoList from "./TodoList";

// Todo component
export default function Todo(){
    // list to store the todos
    const [todos, storeTodos] = useState([]);
  
    // create a form 
    return(
        <div>
            <Form todos ={todos} storeTodos ={storeTodos}/>
            <TodoList todos={todos} storeTodos={storeTodos}/>
        </div>
    )
}