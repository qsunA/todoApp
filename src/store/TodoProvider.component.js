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

    const deleteCompletedTodoItem = ()=>{
        console.log(`deleteCompletedTodoItem`)
        setValue(prev=>{
            return{...prev, todos : prev.todos.filter(todo=>!todo.checked)}
        })
    }

    const updateTodoItem = (item)=>{
        console.log('item: ', item);
        setValue(prev=> {
            return {...prev, todos : prev.todos.map(todo=>todo.id===item.id ? item : todo)}
        })
    }

    const updateChecked = (item)=>{
        console.log('item: ',item);
        setValue(prev=>{
            return {...prev, todos : prev.todos.map(todo=>todo.id===item.id? {...todo,checked:!todo.checked}:todo)}
        });
    }

    const setVisibilityFilter = type=>{
        console.log('type: ', type);
        setValue(prev=>{
            return {...prev, visibilityFilter : type}
        })
    }

    const getFilteredTodos = (visibilityFilter, todos) =>{
        switch(visibilityFilter) {
            case 'All':
                return todos;
            case "Completed" : 
                return todos.filter(todo=>todo.checked);
            case "Active":
                return todos.filter(todo=>!todo.checked);
            default : 
                throw new Error("Unknown filter : " + visibilityFilter);
        }
    }

    const getCompletedCount = todos =>{
        return todos.length>0 ? todos.reduce((count, todo)=> (todo.checked ? count +1 : count+0),0):0;
    }
    
    const completeAllTodos = (todos) => {
        const areAllMarked = todos.every(todo=>todo.checked);
        console.log('areAllMarked : ', areAllMarked)
        setValue(prev=>{
            return{...prev, todos: prev.todos.map(todo=>({...todo, checked : !areAllMarked}))}
        });
    }

    const initialState= {
        todos : [],
        addTodoItem,
        deleteTodoItem,
        deleteCompletedTodoItem,
        updateTodoItem,
        updateChecked,
        visibilityFilter : 'All',
        setVisibilityFilter,
        getFilteredTodos,
        getCompletedCount,
        completeAllTodos
    }

    const [value,setValue] = useState(initialState);

    return(
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;