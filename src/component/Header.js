import React from 'react';
import TodoTextInput from './TodoTextInput';

const Header = ()=>{
    return(
        <header>
            <h1>todos</h1>
            <TodoTextInput/>
        </header>
    )
}

export default Header;