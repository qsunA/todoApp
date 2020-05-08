import React, { useContext, useCallback } from 'react';
import TodoList from './TodoList';
import { TodoContext } from '../store/Todo.context.js';
import Footer from './Footer';
import styled from 'styled-components';

const MainSection = ()=>{
    const {todos, getCompletedCount, completeAllTodos, deleteCompletedTodoItem} = useContext(TodoContext);
    const todoCount = todos.length;
    const completedCount = getCompletedCount(todos);

    const onChangeAllCheckBox = useCallback(()=>{
        completeAllTodos(todos);
    }, [completeAllTodos, todos]);

    return(<Section className="main">
            {
                !!todoCount && <span>
                    <ToggleAll type="checkbox"
                    defaultChecked={completedCount === todoCount}/>
                    <label onClick={onChangeAllCheckBox}/>
                </span>
            }
            
            <TodoList/>
            {
                !!todoCount && <Footer 
                activeCount={todoCount-completedCount}
                completedCount={completedCount}
                deleteCompletedTodoItem  = {deleteCompletedTodoItem}/>
            }            
        </Section>
    )
}

const Section = styled.section`
    position : relative;
    z-index:2;
    border-top : 1px solid #e6e6e6;
`;

const ToggleAll = styled.input`
    width: 1px;
    height : 1px;
    border : none;
    opacity : 0;
    position : absolute;
    right : 100%;
    bottom : 100%;

    & + label{
        width: 60px;
        height: 34px;
        font-size: 0;
        position: absolute;
        top: -52px;
        left: -13px;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
    }

    & + label:before{
        content: '❯';
        font-size: 22px;
        color: #e6e6e6;
        padding: 10px 27px 10px 27px;
    }

    &:checked + label:before{
        color:#737373;
    }

    @media screen and (-webki-min-device-pixel-ratio:0){
        background: none;
    }

`;

export default MainSection;