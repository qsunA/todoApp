import React, { useState } from 'react';
import { TodoContext } from './Todo.context';

const TodoProvider = ({children}) =>{
    const addTodoItem = (item) =>{
        console.log('item: ', item);
        setValue(prev=>{
            return {...prev, todos : [...prev.todos, {id: prev.todos.length , todoName : item, checked : false}]};
        });
    }

    const deleteTodoItem = (id)=>{
        console.log('id: ', id);
        setValue(prev=>{
            return {...prev, todos : prev.todos.filter(todo => todo.id !== id)}
        })
    }

    const updateTodoItem = (item)=>{
        console.log('item: ', item);
        setValue(prev=> {
            return {...prev, todos : prev.todos.map(todo=>todo.id===item.id ? item : todo)}
        })
    }

    const initialState= {
        todos : [],
        addTodoItem,
        deleteTodoItem,
        updateTodoItem
    }

    const [value,setValue] = useState(initialState);

    return(
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;