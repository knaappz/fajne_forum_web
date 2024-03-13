import './style.css'
import Footer from "../components/FooterFiles/Footer"
import LoginForm from "../components/LoginForm/LoginForm"
import Navbar from '../components/HeaderFiles/Navbar';


function LoginPage() {
    return(
        <section>
            <Navbar/>
            <LoginForm/>
            <Footer/>
        </section>
    )
}

export default LoginPage;