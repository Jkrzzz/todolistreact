import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  //   const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.InputContainer}>
        <input
          className={styles.modelInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Enter Todo List"
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
