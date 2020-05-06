import React from 'react';
import TodoList from './TodoList';

const MainSection =()=>{
    return(
        <section className="main">
            <span>
                <input type="checkbox" />
                <label/>
            </span>
            <TodoList/>            
        </section>
    )
}

export default MainSection;