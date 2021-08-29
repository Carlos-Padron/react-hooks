import { useState } from "react"

const useCounter = (initialState = 10) => {
    
    const [state, setState] = useState(initialState)

    const increment = (factor = 1) => {
        setState(state + factor)
    }

    const decrement = (factor = 1) => {
        setState(state - factor)
    }

    const resetState =  () => {
        setState(initialState)
    }

    return {
        state,
        increment,
        decrement,
        resetState
    }


}

export default useCounter
