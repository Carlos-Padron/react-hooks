import React from 'react'
import PropTypes from "prop-types";


const TodoListIems = ({todo, handleToggle, handleDelete}) => {
    return (
        <>
         <li style={{display: 'flex'}} key={todo.id}>
                 <p 
                className={ `${todo.done && 'complete'}`}
                onClick={ () => handleToggle(todo.id)}
                >
                {todo.desc}
                 </p>   
                 <button onClick={ ()=>{ handleDelete(todo.id)}}> Borrar</button>                   
        </li>   
        </>
    )
}


TodoListIems.propTypes = {
    todo: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
}

export default TodoListIems
