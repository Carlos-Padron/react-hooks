import React from 'react'
import useFecth from '../../hooks/useFecth'
import useCounter from "../../hooks/useCounter";


const MultipleCustomHooks = () => {

    
    const {state, increment} = useCounter(1)

    const { loading , data} =  useFecth(`https://www.breakingbadapi.com/api/quotes/${state}`)

    const {author, quote } = !!data && data[0]



    return (
        <div>
            <h1>custom hooks</h1>
            <hr />
            {
                loading
                ?
                (
                    <div>loading</div>
                )
                :
                (
                    <blockquote>
                        <p>{quote}</p>
                        <p>{author}</p>
                    </blockquote>
                )
            }
            
            <button onClick={()=> increment()} >Siguiente quote</button>
        </div>
    )
}

export default MultipleCustomHooks
