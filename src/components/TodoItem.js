function TodoItem({ id, title, done }) {
  return (
    <li className="todo-item">
      <input type="checkbox" />
      {title}
      <button>Delete</button>
    </li>
  );
}

export default TodoItem;
