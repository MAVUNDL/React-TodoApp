import TodoComp from "./TodoComp";
import styles from "./TodoList.module.css"

export default function TodoList({todos, storeTodos}){
    return(
        <div className={styles.list}>
            {todos.map(
                item => (
                    // rending a component for each todo item 
                    <TodoComp key={item} item={item} todos={todos} storeTodos={storeTodos}/>
                )
            )}
        </div>
    )
}