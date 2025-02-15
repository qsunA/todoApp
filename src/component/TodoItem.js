import React, { useState, useCallback, useContext, useEffect } from 'react';
import TodoTextInput from './TodoTextInput';
import { TodoContext } from '../store/Todo.context.js';
import styled , { css } from 'styled-components';

const TodoItem = ({todo})=>{
    const {updateChecked,deleteTodoItem} = useContext(TodoContext);
    const [editFlag, setEditFlag] = useState(false);
    const [checked, setChecked] = useState(false);

    useEffect(()=>{
        setChecked(todo.checked);
    }, [todo.checked]);

    const handleDoubleClick = useCallback(()=>{
        setEditFlag(true);
    },[setEditFlag]);

    const handleCheckChange= useCallback(()=>{
        setChecked(prev=>!prev);
        updateChecked(todo);
    }, [updateChecked, todo]);

    const handleDeleteTodo = useCallback(()=>{
        //onRemove(todo.id)
        deleteTodoItem(todo.id);
    }, [deleteTodoItem,todo]);

    return(
        <TodoItemLi >
            {
                editFlag ? 
                <div>
                    <TodoTextInput todo={todo} setEditFlag={setEditFlag}/>
                </div>: 
                <View>
                    <Toggle type="checkbox" data-testid="toggle" checked={checked} 
                    onChange={handleCheckChange}/>
                        <Label check={todo.checked} onDoubleClick={handleDoubleClick}>{todo.todoName}</Label>
                    <Button onClick={handleDeleteTodo} title="삭제"/>
                </View>
            }
        </TodoItemLi>
    );
}

const TodoItemLi = styled.li`
    position:relative;
    font-size : 24px;
    border-bottom : 1px solid #ededed;

    &:last-child {
        border-bottom: none;
    }

    &:hover button{
        display: block;
    }
`;

const Button = styled.button`
    display : none;
    position : absolute;
    top : 0;
    right : 10px;
    bottom : 0;
    width : 40px;
    height : 40px;
    margin : auto 0;
    font-size : 30px;
    color : #cc9a9a;
    margin-bottom : 11px;
    transition : color 0.2s ease-out;

    &:hover {
        color : #af5b5e;
    }

    &:after{
        content : 'x';
    }
`;

const View = styled.div`
`;

const Toggle = styled.input`
    text-align : center;
    width : 40px;
    height : auto;
    position : absolute;
    top : 0;
    bottom :0;
    margin : auto 0;
    border : none;
    apperance : none;
    opacity: 0;

    &+ label{
        background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
        background-repeat: no-repeat;
        background-position: center left;
    }

    &:checked + label{
        background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
    }

    @media screen and (-webki-min-device-pixel-ratio:0){
        background : none;
    }
`;

const Label = styled.label`
    word-break: break-all;
	padding: 15px 15px 15px 60px;
	display: block;
	line-height: 1.2;
	transition: color 0.4s;
	font-weight: 400;
	color: #4d4d4d;



    ${(props) =>
        props.check &&
        css`
            color: #cdcdcd;
            text-decoration: line-through;
        `
    }
`;

export default TodoItem;