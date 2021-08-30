import React, { useRef } from 'react'

const FocusScreen = () => {

    const inputRef = useRef()


    const handleClick = ()=>{
        inputRef.current.select()
    }
    return (
        <div>
            <h1>focus screen</h1>
            <hr />
            
            <input type="text" ref={inputRef} />
            <button onClick={handleClick} >focus</button>
        </div>
    )
}

export default FocusScreen
