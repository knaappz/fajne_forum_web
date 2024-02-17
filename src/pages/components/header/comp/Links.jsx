import { Link } from "react-router-dom"


function Links(){
    return(
        <div className="links-navi">       
            <Link to=''> <p>Kategorie</p>  </Link>     
            <Link to=''> <p>Moje opinie</p>  </Link>     
            <Link to=''> <p>Konto</p>  </Link>     
            <Link to='loginpage'><p className="login">Logowanie</p></Link>
        </div>
    )
}

export default Links;