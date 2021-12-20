import TodoItem from "./TodoItem";
import {useSelector} from 'react-redux';


function TodoList() {
    const todos = useSelector((state)=> state.todos);

    return (
        <ul className='todo-list'>
          {todos.map((todo) =>(
            <TodoItem id={todo.id} title={todo.title} done={todo.done}/>
        ))}
        </ul>
    )
}

export default TodoList;