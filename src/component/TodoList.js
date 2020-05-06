import React,{useContext} from 'react';
import TodoItem from './TodoItem.js';
import { TodoContext } from '../store/Todo.context.js';

const TodoList = ()=>{
    const {todos} = useContext(TodoContext);
    return(
        <div>
        {
            todos.map((todo,index)=> {
                return <TodoItem key={index} todo={todo}/>
                
            })
        }
        </div>
    )
}

export default TodoList;