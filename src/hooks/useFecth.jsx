import  { useEffect, useRef, useState } from 'react'

const useFecth = (url) => {
    
    const isMounted = useRef(true)

    const [state, setstate] = useState({data:null, loading: true, error:null})
    
    useEffect(() => {
        
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {

        setstate({
            data:null, loading: true, error:null
        })

        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            if (isMounted.current) {
                setstate({
                    data,
                    loading: false, 
                    error: false
                })    
            }
        })
    }, [url])
    

    return state
}

export default useFecth
