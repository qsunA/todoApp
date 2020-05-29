import React from 'react';
import {render} from '@testing-library/react';
import Header from '../component/Header';

describe('<Header/>',()=>{
    it('render h1 test and TodoTextInput',()=>{
        const {getByText,getByPlaceholderText} = render(<Header/>);
        getByText('todos');
        getByPlaceholderText('할 일을 적어주세요');
    });
})