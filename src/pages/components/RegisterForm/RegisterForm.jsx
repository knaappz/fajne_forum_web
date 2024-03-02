import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/config";
import Navbar from "../HeaderFiles/Navbar"


function RegisterForm() {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
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

    const handleRegister = async () => {
        setError('')
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            navigate('/')
            console.log(user);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
        <section id='mainlogin'>
            <div className="login-form">
                {!loading && user?.email && (
                    <h3>Aktualnie zalogowany: <span>{user?.email}</span></h3>

                )}

                <h3>Utwórz konto:</h3>
                <input onChange={(event) => { setRegisterEmail(event.target.value) }} type="text" name="email" placeholder="Email"/>
                <input onChange={(event) => { setRegisterPassword(event.target.value) }} type="password" name="password" placeholder="Hasło"/>
                {
                    error && 
                    <div className="error">
                        {error}
                    </div>
                }
               
                <button onClick={handleRegister} type="submit">Utwórz</button>
                <div className="backNreset">
                    <p>Masz już konto? <Link to="/loginpage">Wróć do logowania</Link></p>
                </div>
            </div>
        </section>
        </>
    )
}

export default RegisterForm;
