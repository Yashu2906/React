import ProjectName from "./ProjectName";
import AddTodo from "./AddTodo";
import Items1 from "./Items1";
import Items2 from "./Items2";
import "./App.css";
function TodoApp() {
  return (
    <center class="toDo-Container">
      <ProjectName />
      <AddTodo />

      <div class="item-Container">
        <Items1 />
        <Items2 />
      </div>
    </center>
  );
}
export default TodoApp;
