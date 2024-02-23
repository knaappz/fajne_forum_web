import { Link, useNavigate } from "react-router-dom";

function Links() {
    const navigate = useNavigate();

    const handleLogout = () => {
        
        navigate("/");
    };

    return (
        <div className="links-navi">
            <Link to=''> <p>Kategorie</p>  </Link>
            <Link to=''> <p>Moje opinie</p>  </Link>
            <Link to=''> <p>Konto</p>  </Link>
            <p onClick={handleLogout}><b>Wyloguj</b></p>
        </div>
    );
}

export default Links;
