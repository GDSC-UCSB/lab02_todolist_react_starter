import React, {useState, useEffect, useRef} from 'react'


/*************** CODE STARTS BELOW *******************************************
//IMPORTANT: UNCOMMENT THE CHUNK OF CODE BELOW AND START WORKING FROM HERE ***
//INSTRUCTIONS: FILL IN ALL THE PARTS LABELED '...'
*******************************************************************************


function TodoForm(props) {

//when updating the value, we want to still have our current string (aka task) appear 
    in the text box to edit, instead of no string in text box after clicking 'edit'
    call the correct 'hook' (hint: we've used this in Todo.js)
  
    const [input, setInput] = ...(props.edit ? props.edit.value : '');
  
// useRef(): this hook allows you to focus on whatever you put as 'ref'
    const inputRef = useRef(null);

//useEffect allows you to perform side effects in function components
  useEffect(() => {
    //focus on the current this task
    inputRef.current.focus();
  })


  //function to update your todo list items
  const handleChange = e => {
    
    //updates your task ( hint: call set...() )
    ...(...);

  };

  //function to handle the 'submit' button to add task
  const handleSubmit = e => {
      e.preventDefault();

    //creates a RANDOM id to store your task in ;'id', 
    //and saves your task (input) in 'text' WHEN you 
    //'submit' your button
      
      props....({
          id: ... 
          text: ...
      });

    //call the function to reset input to empty string
      ...(...);
  };


  return (
    //when submitting task, calls correct function from TodoForm.js
    <form className='todo-form' onSubmit={...}>

        //to check whether we need to display the update form or the add task form, 
        we need to create a conditional, both outcomes display similar stuff, but there
        are differences --> hint: BUTTONS
            
            {props.edit ? (
            <>
              <input 
              type='text' 
              placeholder='Update Task' //default placeholder 4 text box
              value={...} //saves your input into the variable 'value'
              name='text' 
              className='todo-input'
              onChange={...} //if you update your task, calls correct function
              ref={inputRef} //calls inputRef when your text cursor is 'focused' on this specific task
            />
            <button className='todo-button edit'>update</button>
            </>

          ) : ( 

            <> //based on what you saw from the first outcome above, fill in the rest here
              <... 
                ... = '...' 
                ... = '...' //placeholder
                ... ={...} //save input
                ... = '...' 
                ... ='todo-input'
                ... = {...} //if you update task, calls correct function
                ... = {...} //input Ref
              />

        //the submit button
          <... ...='...'>...</...> 
          </>
          )}
          
    </form>
  )
}
... // this statement allows you to use this function in other files

*/