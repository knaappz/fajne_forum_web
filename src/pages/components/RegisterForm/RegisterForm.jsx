import { Link, useNavigate } from "react-router-dom";
import { auth } from "/src/firebase/config.js";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

function LoginForm() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [loginType, setLoginType] = useState('login');
    const [userCredentials, setUserCredentials] = useState({});
    const [error, setError] = useState('');

    function handleCredentials(e) {
        setUserCredentials({...userCredentials, [e.target.name]:e.target.value});
    }

    function handleSignup(e) {
        e.preventDefault();
        setError('')

        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .then((userCredential) => {
            console.log(userCredential.user);
            navigate('/home')
        })
        .catch((error) => {
            setError(error.message)

        });
    }

    return(
        <section id='mainlogin'>
            <div className="login-form">
                <h3>Wypełnij dane:</h3>

                <label>Email:</label>
                <input onChange={(e)=>{handleCredentials(e)}} type="text" name="email" />

                <label>Hasło:</label>
                <input onChange={(e)=>{handleCredentials(e)}} type="password" name="password" />

                <button onClick={(e)=>{handleSignup(e)}} type="submit">Utwórz konto</button>

                {
                 error &&
                 <div className="error">
                    {error}
                </div>
                }
                

                <div className="backNreset">
                    <p>Masz już konto? <Link to="/">Wróć do logowania</Link></p>
                </div>
            </div>
            
        </section>
    )
}

export default LoginForm;