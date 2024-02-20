import { Link } from "react-router-dom";

function LoginForm() {
    return(
        <section id='mainlogin'>
            <div className="login-form">
                <h3>Wypełnij dane:</h3>
                <label>Email:</label>
                <input type="text" name="email" />
                <label>Hasło:</label>
                <input type="text" name="password" />
                <button type="submit">Utwórz konto</button>
                <p>Masz już konto? <Link to="/loginpage">Wróć do logowania.</Link></p>
            </div>
            
        </section>
    )
}

export default LoginForm;