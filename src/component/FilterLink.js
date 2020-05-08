import React, { useContext } from 'react';
import { TodoContext } from '../store/Todo.context.js';
import styled , { css } from 'styled-components';

const FilterLink = ({children,filter}) =>{
    const {setVisibilityFilter,visibilityFilter} = useContext(TodoContext);

    console.log(`visibilityFilter :${visibilityFilter}`)

    return(
        <Link href="# " selected={visibilityFilter===filter} onClick={()=>setVisibilityFilter(filter)}>{children}</Link>
    )
}

const Link=styled.a`
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;

    &:hover{
        border-color: rgba(175, 47, 47, 0.1);
    }

    ${(props)=>
        props.selected &&
        css`
            border-color: rgba(175, 47, 47, 0.2);
        `
    }
`;

export default FilterLink;
