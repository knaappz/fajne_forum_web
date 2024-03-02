import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/config";
import { onAuthStateChanged, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth"
import Navbar from "../HeaderFiles/Navbar"

function LoginForm() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const navigate = useNavigate();


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const handleLogin = async () => {
        setError('')
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            navigate('/')
            console.log(user);
        } catch (error) {
            setError(error.message);
        }
    };

    function handlePasswordReset() {
        const email = prompt('Podaj swój email');
        if (email === null) {
            return;
        }
        sendPasswordResetEmail(auth, email);
        alert('Link zmiany hasła został wysłany na twojego maila!');
    }
    

    const handlelogout = async () => {
        await signOut(auth);
    };

    return (
        <>
        <section id='mainlogin'>
            <div className="login-form">

                {!loading && ( 
                    <h3>Witaj! <br></br>
                    <span>{user?.email}</span></h3>
                )}

                {!user && (
                    <>
                        <input onChange={(event) => { setLoginEmail(event.target.value) }} type="text" name="email" placeholder="Email"/>
                        <input onChange={(event) => { setLoginPassword(event.target.value) }} type="password" name="password" placeholder="Hasło"/>
                    
                        {
                            error &&
                            <div className="error">
                                {error}
                            </div>
                        }
                    
                        <button onClick={handleLogin} type="submit">Zaloguj</button>
                    </>
                )}

                <div className="backNreset">
                    <p>Jesteś nowy? <Link to="/registerpage">Załóż konto</Link></p>
                    <p>Zapomniałeś hasła? <a onClick={handlePasswordReset}>Zmień</a></p>
                </div>

                {user && (
                <button className="signout" onClick={handlelogout}>Wyloguj</button>
                )}            
            </div>
        </section>
        </>
    )
}

export default LoginForm;
