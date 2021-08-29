import React, { useState } from 'react'

const CounteApp = () => {

    const [counter, setcounter] = useState({
        counter1:0,
        counter2:21,
        counter3:0,
        counter4:0,
    })


    const handleClick = (e) =>{
        setcounter({
            ...counter,
            counter1: counter1+1
        })
    }

    const {counter1, counter2} = counter

    return (
        <div>
            <h1>counter1 { counter1}</h1>
            <h1>counter2 { counter2 }</h1>
            <hr />

            <button onClick={()=> handleClick()} >
                +1
            </button>
        </div>
    )
}

export default CounteApp
