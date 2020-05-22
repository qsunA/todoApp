import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import TodoTextInput from '../component/TodoTextInput';
import TodoProvider from '../store/TodoProvider.component';

describe('<TodoTextInput/>',()=>{
    const setup = (props ={}) =>{
        const utils = render(
                                <div>
                                    <TodoProvider TodoProvider >
                                        <TodoTextInput {...props}/>
                                    </TodoProvider>
                                </div>
                            );
        const { getByPlaceholderText } = utils;
        const input = getByPlaceholderText('할 일을 적어주세요');
        return{
            ...utils,
            input
        }
    };
    
    it('has input ', () => {
        const {input} =setup();
        expect(input).toBeTruthy();
        // input 이 있는지 확인
    });

    it('changes input',()=>{
        const { input } = setup();
        fireEvent.change(input, {
            target : {
                value : 'TDD 배우기'
            }
        });
        expect(input).toHaveAttribute('value','TDD 배우기');
    });

    // it('calls on addTodoItem and clears input', ()=>{
    //     const addTodoItem = jest.fn();
    //     const { input } = setup({addTodoItem});
    //     fireEvent.change(input, {
    //         target: {
    //             value: 'TDD 배우기'
    //         }
    //     });

    //     fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });
    //     // react-testing-libarary에서는 key:"Enter", code : "enter"로 되어있으나 keyCode :13이어야지만 fail안남 
    //     expect(addTodoItem).toBeCalledWith('TDD 배우기');
    //     expect(input).toHaveAttribute('value', '');
        
    // });

    // it('calls on updateTodoItem, setEditFlag and clears input', () => {
    //     const updateTodoItem = jest.fn();
    //     const setEditFlag = jest.fn();
    //     const todo = { id:1, todoName : 'test'}
    //     const { input } = setup({ updateTodoItem, todo, setEditFlag});
    //     fireEvent.change(input, {
    //         target: {
    //             value: 'TDD 배우기'
    //         }
    //     });

    //     fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });
    //     // react-testing-libarary에서는 key:"Enter", code : "enter"로 되어있으나 keyCode :13이어야지만 fail안남 
    //     expect(updateTodoItem).toBeCalledWith({...todo, todoName:"TDD 배우기"});
    //     expect(setEditFlag).toBeCalledWith(false);
    //     expect(input).toHaveAttribute('value', '');
    // });

    // it('calls on deleteTodoItem, setEditFlag and clears input', () => {
    //     const deleteTodoItem = jest.fn();
    //     const setEditFlag = jest.fn();
    //     const todo = { id: 1, todoName: 'test' }
    //     const { input } = setup({ deleteTodoItem, todo, setEditFlag });
    //     fireEvent.change(input, {
    //         target: {
    //             value: ''
    //         }
    //     });

    //     fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });
    //     // react-testing-libarary에서는 key:"Enter", code : "enter"로 되어있으나 keyCode :13이어야지만 fail안남 
    //     expect(deleteTodoItem).toBeCalledWith(todo.id);
    //     expect(setEditFlag).toBeCalledWith(false);
    //     expect(input).toHaveAttribute('value', '');
    // });

    it('calls on addTodoItem and clears input', () => {
        //const addTodoItem = jest.fn();
        const { input } = setup();
        fireEvent.change(input, {
            target: {
                value: 'TDD 배우기'
            }
        });

        fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });
        // react-testing-libarary에서는 key:"Enter", code : "enter"로 되어있으나 keyCode :13이어야지만 fail안남 
        //expect(addTodoItem).toBeCalledWith('TDD 배우기');
        expect(input).toHaveAttribute('value', '');

    });
});