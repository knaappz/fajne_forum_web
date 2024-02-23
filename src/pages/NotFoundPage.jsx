import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return <div id="nopage">Dupa, nie ma takiej strony... <br></br> <Link to='/'>Strona główna</Link>
    </div>;
}