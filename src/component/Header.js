import React from 'react';
import TodoTextInput from './TodoTextInput';
import styled from 'styled-components';

const Header = ()=>{
    return(
        <AppHeader>
            <H1>todos</H1>
            <TodoTextInput newFlag={true}/>
        </AppHeader>
    )
}

const AppHeader = styled.header`
    display : block;
`;

const H1 = styled.h1`
    position : absolute;
    top : -140px;
    width : 100%;
    font-size : 80px;
    font-weight : 200;
    text-align : center;
    color : #b83f45;
`;

export default Header;