import React, { useState, useCallback, useContext } from 'react';
import {TodoContext} from '../store/Todo.context';

const TodoTextInput = ({todo,setEditFlag})=>{
    const [todoText,setTodoText] = useState( (todo&& todo.todoName) || '');
    const {addTodoItem, updateTodoItem, deleteTodoItem} = useContext(TodoContext); 
    
    const handleChange= useCallback((e)=>{
        setTodoText(e.target.value);
    },[]);

    const handleSubmit = useCallback((e)=>{
        if(e.keyCode === 13){
            if(todo&& todoText!==''){
                updateTodoItem({...todo, todoName:todoText});
                setEditFlag(false);
            }else if(todoText !==''){
                addTodoItem(todoText);                            
                setTodoText('');
            }else if(todo && todoText ===''){
                deleteTodoItem(todo.id);
                setEditFlag(false);
            }
        }
    },[addTodoItem,updateTodoItem,deleteTodoItem,todoText,todo, setEditFlag]);
    
    return(
        <input
            type="text"
            onChange={handleChange}
            onKeyDown={handleSubmit}
            value={todoText}
            placeholder="할일을 적어주세요"
        />
    )
}

export default TodoTextInput;