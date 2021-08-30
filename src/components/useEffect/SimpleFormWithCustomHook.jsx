import React from 'react'
import useForm from '../../hooks/useForm'


const SimpleFormWithCustomHook = () => {

    const {form, handleInputChange} = useForm({
        name:'',
        email:'',
        password:''
    })

    const {name, email, password} = form

    const submitForm = (e)=>{
        e.preventDefault()
        console.log(form)
    }


    return (
        <form onSubmit={submitForm}>
            <h1>form with custom hook</h1>
            <hr />

            <input type="text" name="name" value={name} onChange={handleInputChange}   />
            <input type="text" name="email" value={email} onChange={handleInputChange}   />
            <input type="text" name="password" value={password} onChange={handleInputChange}   />

            <button type="submit">submit</button>
        </form>
    )
}

export default SimpleFormWithCustomHook
