import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import TodoList from '../component/TodoList';
import TodoProvider from '../store/TodoProvider.component';

describe('<TodoList/>',()=>{
    const sampleList = [
        {
            id:1,
            todoName : 'test',
            checked : false
        },
        {
            id: 2,
            todoName: 'todo',
            checked: true
        }
    ];

    const setup = (props = {}) =>{
        const utils = render(
                <div>
                    <TodoProvider TodoProvider>
                        <TodoList {...props}/>
                    </TodoProvider>
                </div>            
        );
        return utils;
    }

    it('renders todo properly',()=>{
        
        const utils = setup();
        const {getByText} = utils;
        // getByText(sampleList[0].todoName);
        // getByText(sampleList[1].todoName);
    });
});

