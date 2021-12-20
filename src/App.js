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

  const today = new Date().toLocaleDateString("en-UK", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div>
      <section id="form">
        <div className="box" id="heading">
          <h1>{today}</h1>
        </div>
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
