import React, { useState, useCallback, useContext } from 'react';
import {TodoContext} from '../store/Todo.context';
import styled , { css } from 'styled-components';

const TodoTextInput = ({todo,setEditFlag, newFlag})=>{
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
        <Input
            type="text"
            onChange={handleChange}
            onKeyDown={handleSubmit}
            value={todoText}
            placeholder="할일을 적어주세요"
            new={newFlag}
        />
    )
}

const Input = styled.input`
    position : relative;
    margin : 0;
    width : 100%;
    font-size:24px;
    line-height : 1.4em;
    box-sizing: border-box;
    
    ${(props)=>
        props.new && 
        css`
            padding : 16px 16px 16px 60px;
            border : none;
            background: rgba(0, 0, 0, 0.003);
            box-shadow : inset 0 -2px 1px rgba(0,0,0,0.03);        
        `
    }
`;

export default TodoTextInput;