import { useSelector } from "react-redux";

function ItemsLeft() {
  const notDone = useSelector((state) =>
    state.todos.filter((todo) => todo.done !== true)
  );
  return <p>Items left to complete: {notDone.length}</p>;
}

export default ItemsLeft;
