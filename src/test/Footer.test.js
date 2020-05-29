import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Footer from '../component/Footer';

describe('<Footer/>',()=>{
    it('has clear button', ()=>{
        const {getByText} = render(<Footer/>);
        const clearBtn = getByText('clear');
        expect(clearBtn).toBeTruthy();
    });

    it('click clear button',()=>{
        const deleteCompletedTodoItem = jest.fn();
        const {getByText} = render(<Footer deleteCompletedTodoItem={deleteCompletedTodoItem}/>);
        const clearBtn = getByText('clear');
        fireEvent.click(clearBtn);
        expect(deleteCompletedTodoItem).toBeCalled();
    });

    it('get 5 activeCount',()=>{
        const {getByText} = render(<Footer activeCount={5}/>);
        const countNumber = getByText("5");
        expect(countNumber).toBeTruthy();
        const countAllText = getByText("items left");
        expect(countAllText).toBeTruthy();
    });

    it('get 1 activeCount',()=>{
        const {getByText} = render(<Footer activeCount={1}/>);
        const countNumber = getByText("1");
        expect(countNumber).toBeTruthy();
        const countAllText = getByText("item left");
        expect(countAllText).toBeTruthy();
    });

    it('get 0 activeCount',()=>{
        const {getByText} = render(<Footer activeCount={0}/>);
        const countNumber = getByText("No");
        expect(countNumber).toBeTruthy();
    });
    
});