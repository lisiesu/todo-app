import { useDispatch } from "react-redux";
import { deleteItem, toggleDone } from "../redux/itemSlice";

function TodoItem({ id, title, done }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteItem({ id: id }));
  }

  function handleToggle() {
    dispatch(toggleDone({ id: id, done: !done }));
  }

  return (
    <li className="todo-item">
      <input type="checkbox" checked={done} onClick={handleToggle} />
      {title}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
