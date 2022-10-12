import React, { useState } from 'react'
import TodoForm from './TodoForm'
//pre-requisite to the next 2 imports: 
//to access --> https://react-icons.github.io/react-icons
    //type in Terminal: npm install react-icons --save
import {RiCloseCircleLine} from 'react-icons/ri' 
import {TiEdit} from 'react-icons/ti'

/* Todo returns all the parts that make up a todo task (button, text box, etc) */
function Todo({todos, completeTodo, removeTodo, updateTodo}) {

    //by default, id and value will not exist since we haven't added any tasks
    const [edit, setEdit] = useState({
        id: null, 
        value: ''
    });

    //when we've entered our task and submitted them, we set id and value back to nothing
    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    //id an id exists (aka you've entered a task) then return  TodoForm, which
    //is the component that can show your task you've submitted (displayed below the text box)
    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    };

    //scan through all your tasks and for each task, returns this specific format to show tasks
    return todos.map((todo, index) => (
        
        //notice that there can only be one <div> in the return statement, NO DOUBLE DIVS
        <div 
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'} //checks if task is complete
        key={index} >

            {/* when task is completed, call completeTodo to update webpage */}
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text} </div>

            {/* displays the edit and delete icons */}
            <div className='icons'>
                <RiCloseCircleLine  //calls removeTodo when you click the delete icon
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <TiEdit  //calls setEdit() when you click the edit icon
                onClick={() => setEdit({id: todo.id, value: todo.text})}
                className='edit-icon'/>
            </div>
        </div>
    ))
}

export default Todo