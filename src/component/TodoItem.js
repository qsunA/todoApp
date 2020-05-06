import React, { useState, useCallback } from 'react';
import TodoTextInput from './TodoTextInput';

const TodoItem = ({todo})=>{
    console.log(todo.todoName);
    const [editFlag, setEditFlag] = useState(false);
    const [checked, setChecked] = useState((todo&& todo.checked)|| false);
    const handleDoubleClick = useCallback(()=>{
        setEditFlag(true);
    },[setEditFlag]);

    return(
        <li>
            {
                editFlag ? 
                <div>
                    <TodoTextInput todo={todo} setEditFlag={setEditFlag}/>
                </div>: 
                <div>
                    <input type="checkbox" checked={checked} />
                    <label onDoubleClick={handleDoubleClick}>{todo.todoName}</label>
                    <button/>
                </div>
            }
        </li>
    );
}

export default TodoItem;