// Todo returns all the parts that make up a todo task (button, text box, etc)

import React, { useState } from 'react'

/*************** CODE STARTS BELOW *******************************************
 

//import ... from '...' //FIRST IMPORT TodoForm.js B4 RUNNING EVERYTHING

// NOTICE *************************************************
//to access --> https://react-icons.github.io/react-icons *
//Terminal: npm install react-icons --save ****************
import {RiCloseCircleLine} from 'react-icons/ri' //must import react-icons (refer to comment above)
import {TiEdit} from 'react-icons/ti' //must import react-icons (refer to comment above)

//IMPORTANT: UNCOMMENT THE CHUNK OF CODE BELOW AND START WORKING FROM HERE ***
//INSTRUCTIONS: FILL IN ALL THE PARTS LABELED '...'
*******************************************************************************




function Todo({todos, completeTodo, removeTodo, updateTodo}) {

//set the default, id and value (what's stored b4 user enters anything?)
    
    const [edit, setEdit] = useState({
        id: ...
        value: ...
    });

//TODO PROPERTY: submitUpdate
//when we've entered our task and submitted them, we set id and value back to nothing

    const submitUpdate = value => {
        updateTodo(..., ...);
        
        setEdit({
            id: ...
            value: ...
        });
    };

//id an id exists (aka you've entered a task) then return TodoForm, which
//is the component that can show your task you've submitted (displayed below the text box)

    if(...){
        return <.../>;
    };

//scan through all your tasks and for each task, returns this specific format to show tasks

    return todos.map((todo, index) => (
        
        <div 
        className={ ... ? 'todo-row complete' : 'todo-row'} //checks if task is complete
        key={...} >

        //when task is completed, call completeTodo to update webpage

            <div key={...} onClick={() => ...(...)}> {...} </div>


        //displays the edit and delete icons

            <div className='icons'>
                <RiCloseCircleLine
            
                //calls removeTodo when you click the delete icon

                    onClick={() => ...(...)}
                    className='delete-icon'
                />

                <TiEdit  
                
            //calls setEdit() when you click the edit icon

                onClick={() => ...({id: ..., value: ...})}
                className='edit-icon'/>

            </div>
        </div>
    ))
}

//export Todo
export default ...

************************************************************************/
