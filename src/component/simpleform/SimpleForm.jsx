

const SimpleForm = () => {
    const handleSubmit = e=>{
        e.preventDefault()
        console.log('form submitted', e.target.name.value)
        console.log('form submitted', e.target.email.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input type="text" name="name" /> <br />
                <input type="email" name="email" /><br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;