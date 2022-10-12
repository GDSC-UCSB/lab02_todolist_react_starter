import React, {useState} from 'react';

/*************** CODE STARTS BELOW *******************************************
TodoList will contain all of the functions that we can do with our 
tasks. It will use components Todo and TodoForm to create the entire Task
List that is seen in our webpage

//IMPORTANT: UNCOMMENT THE CHUNK OF CODE BELOW AND START WORKING FROM HERE ***
//INSTRUCTIONS: FILL IN ALL THE PARTS LABELED '...'
*******************************************************************************

... //import neccessary component files (STH.js)

function ... () {

//var todos, function setTodos uses hook: useState()
    ... [... , ...] = ...([]);

//function addTodo responsible for creating a task to add to our list
//takes in variable 'todo'
    ... ... = ... => {
        
    //if we entered an empty string or nothing at all, then
    //our task list should not be updated
        
        if(!... || /^\s*$/.test(...)){
            return; //returns nothing
        }

    //newTodos stores array of all task items that we type in
    ... ... = [todo, ...todos]; <-- you don't need to replace anything for the following part of this line: "...todo" 
        
    //call function that takes in newTodos and updates the webpage
    to show our new added tasks
        ... (...);
    };

//updateTodo is responsible for updating our tasks, takes in args: todoId, newValue
    ... {

    //if we entered an empty string or nothing at all, then
    //our task list should not be updated (hint: similar to what we did in addTodo())
        if(...){  return; }

    //calls back each item on our task array that's on the webpage,
    // if they find the matching one we want to update, it will update that
    // section of the array and update our webpage task list
        
        ... (prev => prev.map(item => (item.id === ... ? newValue: ...)));
    };

//removeTodo is responsible for deleting items on our task list, needs task id to do so

    ... {

    //looks through current array of tasks and saves the array that
    //doesn't contain the task we want to delete into removeArr

        ... ... = [...todos].filter(todo => ... !== ...) <-- you don't need to replace anything for the following part of this line: "...todos" 

    //updates the webpage of our updated task array
        ...
    };

//competeTodo is responsible for showing that we 'completed' a task
//when we press on the task (which indicate that we've completed the task)
    
    ... {

    //looks through current todo items, if we've found the one we clicked on
    //it will change the status of isComplete and return results to var updatedTodos
        
        let ... = todos.map(todo => {
            if(...){
                ... = ! ...;
            }
            return ...;
        });

    //updates webpage
        ...

    };

    return (
        <div>
            <h1>why are you stressed today?</h1>
            <TodoForm onSubmit={...}/> // when we add task
            <Todo
            ... = ...           // displays task items
            ...                 // when complete task
            ...                 //when we remove task
            ...     />          //when we update task
        </div>
    );
}

... // this statement allows you to use this function in other files

**************************************************************/