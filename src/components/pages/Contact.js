import React, { useState } from "react";
import { validateEmail} from '../../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {

    const [formState, setFormState] = useState({name: '', email: '', message: '',});
    const { name, email, message } = formState
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {

        setFormState({...formState, [e.target.name]: e.target.value})

        //check for the email to be entered in a correct format and required
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
               // isValid conditional statement
                if (!isValid) {
                    setErrorMessage('Your email is invalid.');
                } else {
                    setErrorMessage('');
                }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        }



        //check for the message to be entered / required
        if (e.target.name === 'message') {

        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        }


        console.log('errorMessage', errorMessage);

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }

    }
    // console.log(formState)

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }


    
    return (
        <section>
            <h1>Contact</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
            {/* // name input
                // email input
                // message text area */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
};

export default Contact;