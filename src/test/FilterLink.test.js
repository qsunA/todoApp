import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import FilterLink from '../component/FilterLink';
import TodoProvider from '../store/TodoProvider.component';
import "jest-styled-components";

describe('<FilterLink/>', () => {
   const setup = (props = {}) =>{
       const initalProps = {filter : "All"};
       const utils =render(
           <div>
               <TodoProvider TodoProvider>
                   <FilterLink {...initalProps} {...props}/>
               </TodoProvider>
           </div>
       );

       const {getByTestId} = utils;
       const link = getByTestId(initalProps.filter);

       return {
           ...utils,
           link
       };
   } 

   it('has a tag named All', ()=>{
        const {link} =setup();
        expect(link).toBeTruthy();
   });

   it('click a tag, has attribute and change border-color', ()=>{
        const {link} = setup();
        fireEvent.click(link);
        expect(link).toHaveStyleRule('border-color', 'rgba(175,47,47,0.2)');
   })
});
