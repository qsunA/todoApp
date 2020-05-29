import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import TodoItem from '../component/TodoItem';
import TodoProvider from '../store/TodoProvider.component';
import "jest-styled-components";

describe('<TodoItem/>',()=>{
    const sampleTodo = {
        id: 1,
        todoName : 'todoTest',
        checked : false
    };

    const setup = (props = {}) =>{
        const initialProps = {todo : sampleTodo};
        const utils = render(
            <div>
                <TodoProvider TodoProvider>
                    <TodoItem {...initialProps} {...props}/>
                </TodoProvider>
            </div>            
        );

        const {
            getByText,
            queryByTitle,
            getByTestId
        } = utils;
        const todo = props.todo || initialProps.todo;
    
        const label = getByText(todo.todoName);
        const button = queryByTitle('삭제');
        const toggle = getByTestId('toggle');

        return {
            ...utils,
            label,
            button,
            toggle
        };
    };

    it('has label, toggle and button', ()=>{
        const { label, button, toggle} = setup();
        expect(label).toBeTruthy();
        expect(button).toBeTruthy();
        expect(toggle).toBeTruthy();
    });

    it('shows line-throgh on label when checked is true',()=>{
        const {label} =setup({todo:{...sampleTodo,checked: true}});
        //expect(toggle).toHaveAttribute("checked","true");
        expect(label).toHaveStyleRule('text-decoration','line-through');
    });

    it('does not show line-through on span when checked is false', () => {
        const { label } = setup({ todo: { ...sampleTodo, checked: false } });
        expect(label).not.toHaveStyle('text-decoration: line-through;');
    });

    // it('calls onRemove',()=>{
    //     const onRemove = jest.fn();
    //     const {button} = setup({onRemove});
    //     fireEvent.click(button);
    //     expect(onRemove).toBeCalledWith(sampleTodo.id);
    // });

    it('does click toggle then checked is true',()=>{
        const {toggle} = setup({todo : sampleTodo});
        fireEvent.click(toggle);
        expect(toggle).toBeChecked();
    });
    
})