import { useEffect, useRef, useState } from "react";


const RefForm = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const [password, setPassword]= useState()
    const [error, setError]= useState()

    useEffect(()=>{
        nameRef.current.focus()
    },[])
    const handleSubmit = e =>{
        e.preventDefault()
        if(password.length < 6){
            setError('pass must be 6 character long')
        }
        else{
            setError('')
        }
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    const handlePassChange = e=>{
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input ref={nameRef} type="text" name="name" /> <br />
                <input ref={emailRef} type="email" name="email" /><br />
                <input
                onChange={handlePassChange}
                ref={passwordRef} type="password" name="password" /><br />
                <input type="submit" />
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default RefForm;