import React from 'react'
import useCounter from '../../hooks/useCounter';

const CounteAppWithCustomHook = () => {


    const {state, increment, decrement, resetState} =  useCounter()

    return (
        <div>
            <h1>Counter with custom hooks</h1>
            <hr />
            <h2>{state}</h2>
            <button onClick={()=> increment(1)} > +1</button>
            <button onClick={()=> decrement(1)} > -1</button>
            <button onClick={()=> resetState()} > -reset</button>
        </div>
    )
}

export default CounteAppWithCustomHook
