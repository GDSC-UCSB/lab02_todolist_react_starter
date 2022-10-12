import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

/*TodoList will contain all of the functions that we can do with our 
tasks. It will use components Todo and TodoForm to create the entire Task
List that is seen in our webpage   ***********************************/

function TodoList() {

    //var todos, function setTodos uses hook: useState()
    const [todos, setTodos] = useState([]);

    //function responsible for creating a task to add to our list
    const addTodo = todo => {
        
        //if we entered an empty string or nothing at all, then
        //our task list should not be updated
        if(!todo.text || /^\s*$/.test(todo.text)){
            return; //returns nothing
        }
        //newTodos stores array of all task items that we type in
        const newTodos = [todo, ...todos];
        
        //setTodos will then take in newTodos and update the webpage
        //to show our new added tasks
        setTodos(newTodos);
    };

    //updateTodo is responsible for updating our tasks
    const updateTodo = (todoId, newValue) => {

        //if we entered an empty string or nothing at all, then
        //our task list should not be updated
        if(! newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        //calls back each item on our task array that's on the webpage,
        // if they find the matching one we want to update, it will update that
        // section of the array and update our webpage task list
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue:item)));
    };

    //removeTodo is responsible for deleting items on our task list
    const removeTodo = id => {
        //looks through current array of tasks and returns the array that
        //doesn't contain the task we want to delete
        const removeArr = [...todos].filter(todo => todo.id !== id)

        //updates the webpage of our updated task list
        setTodos(removeArr);
    };

    //competeTodo is responsible for showing that we 'completed' a task
    //when we press on the task (which indicate that we've completed the task)
    const completeTodo = id => {

        //looks through current todo items, if we've found the one we clicked on
        //it will change the status of isComplete and return results in updatedTodos
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        //updates webpage
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>why are you stressed today?</h1>
            <TodoForm onSubmit={addTodo}/> {/* when we add task */}
            <Todo todos={todos} // displays task items
            completeTodo={completeTodo} // when complete task
            removeTodo={removeTodo} //when we remove task
            updateTodo={updateTodo}/> {/* when we update task */}
        </div>
    );
}

export default TodoList