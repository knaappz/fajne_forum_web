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
                    <Link to='/'><p><b>{userEmail}</b></p></Link>
                </> : ''
            }
        </div>
    );
}

export default Links;
