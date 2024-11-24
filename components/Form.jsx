import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({todos, storeTodos}){
    // state variables
    const [todo, setToDo] = useState("");

    // event handler for the form submit event
    function handleSubmit(event){
        // prevent page  from refreshing
        event.preventDefault(); 
        // store the todos
        storeTodos([...todos, todo]);
        // clear input field
        setToDo("");
    }

    return(
        <div>
            <form className={styles.todoform} onSubmit={handleSubmit}>
                <div className={styles.inputcontainer}>
                    <input className={styles.moderninput} onChange={(e) => setToDo(e.target.value)} type="text" value={todo} placeholder="Enter item" />
                    <button className={styles.modernbutton}> Add </button>
                </div>
            </form>
        </div>
    )
}