import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
export default function TodO() {
  let [todos, setTodos] = useState([{ task: "Sample Task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");
  let addNewTask = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4() }]);
    setNewTodo("");
  };
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  let deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };
  return (
    <div>
      <input
        placeholder="Add New Task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      &nbsp; &nbsp; &nbsp;
      <button onClick={addNewTask}>Add</button>
      <br></br>
      <p>___________________________________</p>
      <h2>Tasks ToDO</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>
              {todo.task}
              &nbsp; &nbsp;
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
