import React, { useEffect, useReducer } from 'react'
import todoReducer from './todoReducer'
import useForm from "../../hooks/useForm";

import  "../../../src/styles.css";
import TodoLists from './TodoLists';
import AddTodo from './AddTodo';

const init = () =>{

    return JSON.parse(localStorage.getItem('todos')) || []
    
}

const TodoApp = () => {


    const [todos, dispatch] = useReducer(todoReducer, [], init)

    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        
    }, [todos])

    const handleDelete = (id)=>{
        const action = {
            type:"delete",
            payload: id
        }
        dispatch(action)
    }

    const handleToggle =(id) =>{
        dispatch({
            type:"toggle",
            payload: id
        })
    }

    const hanldeSubmit = (e) =>{
        e.preventDefault()

        
    }

    const handleAddTodo = (newTodo) =>{

        dispatch( {
            type: "add",
            payload: newTodo
        })
    }


    return (
        <div>

            
            <h1>TodoApp {todos.length}</h1>
            <hr />

            <div style={{display: 'flex'}}>
                <div className="todos" style={{width: "400px"}}>
                    <TodoLists todos={todos} handleDelete={handleDelete} handleToggle={ handleToggle} />
                </div>
                <div className="agregar" style={{width: "400px"}}>
                    < AddTodo handleAddTodo = {handleAddTodo} />
                </div>
            </div>
        </div>
    )
}

export default TodoApp
