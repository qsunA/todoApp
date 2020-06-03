import React, { useCallback } from 'react';
import FilterLink from './FilterLink';
import styled from 'styled-components';

const FILTER_TITLES = ['All','Active', 'Completed'];

const Footer = ({activeCount, deleteCompletedTodoItem, completedCount}) =>{
    const itemWord = activeCount === 1 ? "item" : "items";

    const handleAllCheckItemDelete =  useCallback((e)=>{
        deleteCompletedTodoItem();
    },[deleteCompletedTodoItem]);

    return(
        <TodoFooter>
            <TodoCount>
                <strong>{activeCount || "No"}</strong> {itemWord} left
            </TodoCount>
            <Filters>
                {
                    FILTER_TITLES.map(filter=>(
                        <FilterLi key = {filter}>
                            <FilterLink filter={filter}>{filter}</FilterLink>
                        </FilterLi>
                    ))
                }
            </Filters>
            {
                !!completedCount && (
                    <ClearButton onClick={handleAllCheckItemDelete}  style={{float:"right"}}>clear completed</ClearButton>
                )
            }
            
             
        </TodoFooter>
    )
}

const TodoFooter = styled.footer`
    padding: 10px 15px;
    height: 20px;
    text-align: center;
    font-size: 15px;
    border-top: 1px solid #e6e6e6;

    &:before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 50px;
        overflow: hidden;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
	            0 8px 0 -3px #f6f6f6,
	            0 9px 1px -3px rgba(0, 0, 0, 0.2),
	            0 16px 0 -6px #f6f6f6,
	            0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }

    @media(max-width:430px){
        height : 50px;
    }
`;

const TodoCount= styled.span`
    float: left;
    text-align: left;

    strong{
        font-weight:300;
    }
`;

const Filters = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    right: 0;
    left: 0;

    @media(max-width:430px){
        bottom : 10px;
    }
`;

const FilterLi = styled.li`
    display : inline;
`;

const ClearButton = styled.button`
    float: right;
    position: relative;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`;

export default Footer;