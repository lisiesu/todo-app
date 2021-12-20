import { useDispatch } from "react-redux";
import { deleteItem } from "../redux/itemSlice";


function TodoItem({ id, title, done }) {
    const dispatch = useDispatch();

    function handleDelete() {
        dispatch(deleteItem({ id: id }));
      }

  return (
    <li className="todo-item">
      <input type="checkbox" />
      {title}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
