
import useInputState from "../../customHook/customHook";


const HookForm = () => {
    const nameState = useInputState()
    const emailState = useInputState()
    const passwordState = useInputState()
    const handleSubmit = e =>{
        e.preventDefault()
        console.log(nameState.value)
        console.log(emailState.value, passwordState.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input {...nameState} type="text" name="name" /> <br />
                <input {...emailState} type="email" name="email" /><br />
                <input {...passwordState} type="password" name="password" /><br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default HookForm;