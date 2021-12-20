import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ItemsLeft from "./components/ItemsLeft";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
      <ItemsLeft />
    </div>
  );
}

export default App;
