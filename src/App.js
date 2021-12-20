import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ItemsLeft from "./components/ItemsLeft";

function App() {
  return (
    <div>
      <section id="form">
        <h1>Todo List</h1>
        <TodoForm />
      </section>
      <section id="todos">
        <TodoList />
        <ItemsLeft />
      </section>
    </div>
  );
}

export default App;
