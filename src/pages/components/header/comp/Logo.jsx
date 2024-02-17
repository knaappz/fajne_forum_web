import { Link } from "react-router-dom";

function FajneForumLogo() {
    return(
        <Link to='/home'>
            <img src="./src/assets/logonav-ff.png" alt="Nie ma loga, dupa..." />
        </Link>
    )
}

export default FajneForumLogo;