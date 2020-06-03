import React,{useContext} from 'react';
import TodoItem from './TodoItem.js';
import { TodoContext } from '../store/Todo.context.js';
import styled from 'styled-components';

const TodoList = ()=>{
    const {todos,visibilityFilter,getFilteredTodos} = useContext(TodoContext);
    return(
        <ListUl data-testid="todoList">
        {
            getFilteredTodos(visibilityFilter,todos).map((todo,index)=> {
                return <TodoItem key={index} todo={todo}/>                
            })
        }
        </ListUl>
    )
}

const ListUl = styled.ul `
    margin : 0;
    padding : 0;
    list-style:none;
`;

export default TodoList;