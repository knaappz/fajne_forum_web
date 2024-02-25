import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/config";

function RedirectToLoginPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (!user) {
                navigate('/');
            }
        });

        return () => unsubscribe();
    }, [navigate]); 

}

export default RedirectToLoginPage;
