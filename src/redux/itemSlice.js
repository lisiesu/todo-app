import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "todos",
  initialState: [],
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
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    toggleDone: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].done = action.payload.done;
    },
  },
});

export const { addItem, deleteItem, toggleDone } = itemSlice.actions;
export default itemSlice.reducer;
