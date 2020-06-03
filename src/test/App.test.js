import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import App from '../App';
import "jest-styled-components";

describe('<App/>',()=>{
    it('render Header',()=>{
        const {getByText} = render(<App/>);
        const headerLabel = getByText('todos');
        expect(headerLabel).toBeTruthy();
    });

    it('create new todo', ()=>{
        const {getByPlaceholderText,getByText} = render(<App/>);
        const input = getByPlaceholderText('할 일을 적어주세요');
        fireEvent.change(input, {
            target : {
                value : 'TDD 완료'
            }
        });
        fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });
        expect(input).toHaveAttribute('value', '');
        getByText('TDD 완료');

        const countNumber = getByText("1");
        expect(countNumber).toBeTruthy();
    });

    it('create new Todo then remove todo',()=>{
        const {getByPlaceholderText, getByText} = render(<App/>);
        const input = getByPlaceholderText('할 일을 적어주세요');
        fireEvent.change(input, {
            target : {
                value : 'TDD test'
            }
        });
        fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });
        expect(input).toHaveAttribute('value', '');
        const todoText = getByText('TDD test');
        const countNumber = getByText("1");
        expect(countNumber).toBeTruthy();
        const button = todoText.nextSibling;
        fireEvent.click(button);
        expect(todoText).not.toBeInTheDocument();
        expect(countNumber).not.toBeInTheDocument();
    });

    it('create 2 Todos then remove 1 item',()=>{
        const {getByPlaceholderText, getByText} = render(<App/>);
        const input = getByPlaceholderText('할 일을 적어주세요');
        fireEvent.change(input, {
            target : {
                value : 'TDD test'
            }
        });
        fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });

        fireEvent.change(input, {
            target : {
                value : 'todo 완료 '
            }
        });
        fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });
        expect(input).toHaveAttribute('value', '');
        const todoText = getByText('TDD test');
        const countNumber = getByText("2");
        expect(countNumber).toBeTruthy();
        const button = todoText.nextSibling;
        fireEvent.click(button);
    });

    it('create 2 Todos then 1 item check ',()=>{
        const {getByPlaceholderText, getByText} = render(<App/>);
        const input = getByPlaceholderText('할 일을 적어주세요');
        fireEvent.change(input, {
            target : {
                value : 'TDD test'
            }
        });
        fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });

        fireEvent.change(input, {
            target : {
                value : 'todo 완료 '
            }
        });
        fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });
        expect(input).toHaveAttribute('value', '');
        const todoText = getByText('TDD test');
        const countNumber = getByText("2");
        expect(countNumber).toBeTruthy();
        const check = todoText.previousSibling;
        fireEvent.click(check);
        const clearBtn = getByText('clear completed');
        expect(clearBtn).toBeTruthy();
        expect(todoText).toHaveStyleRule('text-decoration','line-through');
        expect(getByText("todo 완료")).not.toHaveStyleRule('text-decoration', 'line-through');
    });

    it('create 2 Todos then checkAll Toggle ',()=>{
        const {getByPlaceholderText, getByText,getByTestId} = render(<App/>);
        const input = getByPlaceholderText('할 일을 적어주세요');
        fireEvent.change(input, {
            target : {
                value : 'TDD test'
            }
        });
        fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });

        fireEvent.change(input, {
            target : {
                value : 'todo 완료 '
            }
        });
        fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });
        const checkAll = getByTestId('checkAll');
        fireEvent.click(checkAll);
        expect(getByText("todo 완료")).toHaveStyleRule('text-decoration', 'line-through');
        expect(getByText("TDD test")).toHaveStyleRule('text-decoration', 'line-through');    
    });

    it('create 2 Todos then checkAll Toggle have clear button ',()=>{
        const {getByPlaceholderText, getByText,getByTestId} = render(<App/>);
        const input = getByPlaceholderText('할 일을 적어주세요');
        fireEvent.change(input, {
            target : {
                value : 'TDD test'
            }
        });
        fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });

        fireEvent.change(input, {
            target : {
                value : 'todo 완료 '
            }
        });
        fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });
        const todoText = getByText('TDD test');
        const check = todoText.previousSibling;
        fireEvent.click(check);
        const clearBtn = getByText('clear completed');
        fireEvent.click(clearBtn);
        expect(getByText('1')).toBeTruthy();
    });
});