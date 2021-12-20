import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './itemSlice';

export default configureStore({
    reducer: {
        todos: todoReducer,
    }
})