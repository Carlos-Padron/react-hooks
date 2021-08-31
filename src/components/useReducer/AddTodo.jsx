import React from 'react'
import useForm from '../../hooks/useForm'

const AddTodo = ({ handleAddTodo }) => {


const { form, handleInputChange, reset} =  useForm({
        description: ""
    })

    const handleSubmit = (e) =>{
        e.preventDefault()

        if (form.description.trim().length === 0) {
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: form.description,
            done:false
        }
        handleAddTodo(newTodo)
        reset()
    }

    return (
        <>
         <h2>agregar</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" name="description" value={form.description} onChange={handleInputChange} />
                <button type="submit">Agregar</button>
            </form>   
        </>
    )
}

export default AddTodo
