import { Link, useNavigate } from "react-router-dom";
import { auth } from "/src/firebase/config.js";
import { useState } from "react";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";


function LoginForm() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [loginType, setLoginType] = useState('login');
    const [userCredentials, setUserCredentials] = useState({});
    const [error, setError] = useState('');

    function handleCredentials(e) {
        setUserCredentials({...userCredentials, [e.target.name]:e.target.value});
    }

    function handleLogin(e) {
        e.preventDefault();
        setError('');
    
        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .then((userCredential) => {
            // Pobierz token dostępu użytkownika
            const token = userCredential.user.accessToken;
    
            // Pobierz dane użytkownika
            const user = {
                uid: userCredential.user.uid,
                email: userCredential.user.email
                // Możesz dodać inne informacje o użytkowniku, jeśli są dostępne
            };
    
            // Zapisz token oraz dane użytkownika w localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
    
            console.log(userCredential.user);
            navigate('/home');
        })
        .catch((error) => {
            setError(error.message);
        });
    }
    

    function handlePasswordReset() {
        const email = prompt('Podaj swój email')
        sendPasswordResetEmail(auth, email);
        alert('Link zmiany hasła został wysłany na twojego maila!')
    }

    return(
        <section id='mainlogin'>
            <div className="login-form">
                <h3>Witaj!</h3>
                <label>Email:</label>
                <input onChange={(e)=>{handleCredentials(e)}} type="text" name="email" />

                <label>Hasło:</label>
                <input onChange={(e)=>{handleCredentials(e)}} type="password" name="password" />

                <button onClick={(e)=> {handleLogin(e)}} type="submit">Zaloguj</button>

                {
                 error &&
                 <div className="error">
                    {error}
                </div>
                }

                <div className="backNreset">
                    <p>Jesteś nowy? <Link to="/registerpage">Załóż konto</Link></p>
                    <p>Zapomniałeś hasła? <a onClick={handlePasswordReset}>Zmień</a></p>
                </div>
            </div>
            
        </section>
    )
}

export default LoginForm;