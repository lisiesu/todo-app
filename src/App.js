import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ItemsLeft from "./components/ItemsLeft";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos);

  {/* Display list of todos if quatity greater than 0, otherwise show h3 message */}
  let content = <h3>There are no todos on your list</h3>;

  if (todos.length > 0) {
    content = <TodoList />;
  }
  return (
    <div>
      <section id="form">
        <h1>Todo List</h1>
        <TodoForm />
      </section>
      <section id="todos">
        {content}
        {todos.length > 0 && <ItemsLeft />}
      </section>
    </div>
  );
}

export default App;
