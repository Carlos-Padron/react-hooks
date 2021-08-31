import React from 'react'
import PropTypes  from "prop-types";
import TodoListIems from './TodoListIems';

const TodoLists = ({ todos, handleToggle, handleDelete }) => {
    return (
        <>
            <h2>Todos</h2>
                    <ul >
                    {
                        todos.map((todo, index) =>{
                            return < TodoListIems key={index} todo={todo} handleToggle={handleToggle} handleDelete={handleDelete} />
                        })
                    }
                    </ul>
        </>
    )
}

TodoLists.propTypes = {
    todos: PropTypes.array.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default TodoLists
