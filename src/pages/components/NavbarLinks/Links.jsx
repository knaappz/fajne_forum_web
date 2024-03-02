import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../../../firebase/config";

function Links() {
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const userEmailPrefix = user.email.split('@')[0];
                setUserEmail(userEmailPrefix);
            } else {
                setUserEmail(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="links-navi">
            {
                userEmail ? 
                <>
                    <Link to='/loginpage'><p><b>{userEmail}</b></p></Link>
                </> : <Link to='/loginpage'><p><b>Logowanie</b></p></Link>

            }

        </div>
    );
}

export default Links;
