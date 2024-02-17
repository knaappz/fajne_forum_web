import { Link } from "react-router-dom";

function LoginForm() {
    return(
        <section id='mainlogin'>
            <div className="login-form">
                <h3>Witaj ponownie!</h3>
                <label >Email:</label>
                <input type="text" name="email" />
                <label>Hasło:</label>
                <input type="text" name="password" />
                <button type="submit">Zaloguj</button>
                <p>Nie masz konta? <Link to="/registerpage">Załóż teraz!</Link></p>
            </div>
            
        </section>
    )
}

export default LoginForm;
