import { useState } from "react";

const StateForm = () => {
    const [name, setName]= useState(null)
    const [email, setEmail]= useState(null)
    const [password, setPassword]= useState(null)
    const [error, setError]= useState()

    const handleSubmit = e=>{
        e.preventDefault()
        if(password.length < 6){
            setError('password must be 6 character longer')
        }
        else{
            setError('')
        }
        console.log(name,email, password)
    }
    const handleNameChange = e=>{
        setName(e.target.value)
    }
    const handleEmailChange = e=>{
        setEmail(e.target.value)
    }
    const handlePassChange = e=>{
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input 
                onChange={handleNameChange}
                type="text" name="name" /> <br />
                <input
                onChange={handleEmailChange}
                 type="email" name="email" /><br />
                 <input
                 onChange={handlePassChange}
                 type="password" />
                 <br />
                <input type="submit" />
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default StateForm;