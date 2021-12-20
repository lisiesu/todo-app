import { useState } from "react";

function TodoForm() {
  const [value, setValue] = useState("");

  function changeHandler(event) {
    setValue(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Done");
    setValue("");
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        type="name"
        placeholder="Add a todo"
        value={value}
        onChange={changeHandler}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
