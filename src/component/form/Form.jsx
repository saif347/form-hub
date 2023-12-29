

const Form = () => {

    const handleSubmit = e =>{
        e.preventDefault()
        console.log('form submitted');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Form;