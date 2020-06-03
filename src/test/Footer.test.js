import React from 'react';
import {render} from '@testing-library/react';
import Footer from '../component/Footer';

describe('<Footer/>',()=>{

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