import { Link } from "react-router-dom";

function ResetForm() {
    return(
        <section id="mainlogin">
            <div>
                <p>Reset page</p>
                <p>Powrót do logowania <Link to="/loginpage">Klik</Link></p>
            </div>
        </section>
    )

}

export default ResetForm;
