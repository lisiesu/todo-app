import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/itemSlice";

function TodoForm() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  function changeHandler(event) {
    setValue(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    if (value.trim().length === 0) {
      return;
    }
    dispatch(
      addItem({
        title: value,
      })
    );
    setValue("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <input
          type="text"
          placeholder="Add a todo"
          value={value}
          onChange={changeHandler}
        />
        <button type="submit">+</button>
      </div>
    </form>
  );
}

export default TodoForm;
