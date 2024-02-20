import { Link } from "react-router-dom";
import { auth } from "/src/firebase/config.js";
import { useState } from "react";

function LoginForm() {

    const [isLoading, setIsLoading] = useState(false);
    const [loginType, setLoginType] = useState('login');

    console.log(auth);

    return(
        <section id='mainlogin'>
            <div className="login-form">
                <h3>Witaj ponownie!</h3>
                <label >Email:</label>
                <input type="text" name="email" />
                <label>Hasło:</label>
                <input type="text" name="password" />
                <button type="submit">Zaloguj</button>
                <p>Nie masz konta? <Link to='/registerpage'>Załóż teraz!</Link></p>
            </div>
            
        </section>
    )
}

export default LoginForm;