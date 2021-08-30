import { useState } from "react"

const useForm = (initialState = {}) => {

    const [form, setForm] = useState(initialState)

    const handleInputChange = ({target})=>{
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    
    return { 
        form,
        handleInputChange
    }

}

export default useForm
