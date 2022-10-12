import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
                                    //if we don't have lines below, then when updating the value
                                    //you will not have your current value appear in the text box
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  // useRef(): this hook allows you to focus on whatever you put as 'ref'
  const inputRef = useRef(null);


  //useEffect allows you to perform side effects in function components
  useEffect(() => {
    //focus on the current this task
    inputRef.current.focus();
  })


  //function to update your todo list items
  const handleChange = e => {
    //updates your task
    setInput(e.target.value);
  };

  //function to handle the 'submit' button to add task
  const handleSubmit = e => {
      e.preventDefault();
      //creates a random id to store your task in ;'id', 
      //and saves your task in 'text'
      props.onSubmit({
          id: Math.floor(Math.random() * 10000), 
          text: input
      });
      //resets input to empty string
      setInput('');
  };



  return (
    //when submitting task, calls handleSubmit function
    <form className='todo-form' onSubmit={handleSubmit}>

            {/* to check whether we need to display the update form or the add task form --> */}
            {props.edit ? (
            <>
              <input 
              type='text' 
              placeholder='Update Task' //default placeholder in your text box
              value={input} //saves your input into the variable 'value'
              name='text' 
              className='todo-input'
              onChange={handleChange} //if you update your task, calls handleChange function
              ref={inputRef} //calls inputRef when your text cursor is 'focused' on this specific task
            />
            <button className='todo-button edit'>update</button>
            </>
          ) : (
            <>
              <input 
                type='text' 
                placeholder='type to relieve your stress...' //default placeholder in your text box
                value={input} //saves your input into the variable 'value'
                name='text' 
                className='todo-input'
                onChange={handleChange} //if you update your task, calls handleChange function
                ref={inputRef} //calls inputRef when your text cursor is 'focused' on this specific task
              />
          {/* the submit button */}
          <button className='todo-button'>submit</button> 
          </>
          )}
          
    </form>
  )
}
export default TodoForm //allows you to use this function in other files