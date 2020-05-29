import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import MainSection from '../component/MainSection';
import TodoProvider from '../store/TodoProvider.component';

const smapleList = [{
        id: 1,
        todoName: 'test',
        checked: false
    },
    {
        id: 2,
        todoName: 'todo',
        checked: true
    },
    {
        id : 3,
        todoName : 'app',
        checked : false
    }
];

