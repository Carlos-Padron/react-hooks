import React, { useEffect, useState } from 'react'

const SimpleForm = () => {


    const [formstate, setformstate] = useState({
        name:'',
        email:''
    })

    const {name, email} = formstate


    //Called only onces when the compontents is mounted
    useEffect(()=>{
        console.log('hey');
    },[])

    //Called everytime a dependency change
    useEffect(()=>{
        console.log('form cambió');
    },[formstate])


    const handleChange = ({target})=>{

        setformstate({
            ...formstate,
            [target.name]: target.value
        })

    }




    return (
        <>
            <h1>useEfect</h1>
            <hr />

            <input type="text" name="name" value={name} onChange={handleChange}  />
            <input type="text" name="email" value={email} onChange={handleChange}  />
        </>
    )
}

export default SimpleForm
