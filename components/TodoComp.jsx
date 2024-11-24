import styles from "./TodoComp.module.css";

export default function TodoComp({item, todos, storeTodos}){
    // event handle for the delete button
    function handleDelete(item){
        // looping through the list and return only the items that are not equal to our desired item
        storeTodos(todos.filter((todo) => todo !== item));
    }
    // return a div
    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                {item}
                <span>
                <   button onClick={() => handleDelete(item)} className={styles.deletebutton}> x </button>
                </span>
            </div>
            <hr className={styles.line}/>
        </div>
    )
}