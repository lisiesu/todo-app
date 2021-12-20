import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "todos",
  initialState: [
      {id:1, title:"First todo", done: false}
  ],
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: Date.now(),
        title: action.payload.title,
        done: false,
      };
      state.push(newItem);
    },
    deleteItem: (state, action) => {
      return state.filter((todo)=> todo.id !== action.payload.id)
  },
  },
});

export const { addItem, deleteItem } = itemSlice.actions;
export default itemSlice.reducer;
