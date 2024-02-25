import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../../../../firebase/config";

function Links() {
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUserEmail(user.email);
            } else {
                setUserEmail(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="links-navi">
            <Link to=''> <p>Kategorie</p>  </Link>
            {/* <Link to=''> <p>Moje opinie</p>  </Link> */}
            {userEmail ? <p>{userEmail}</p> : ''}
            <Link to='/'><p><b>Logowanie</b></p></Link>
        </div>
    );
}

export default Links;
