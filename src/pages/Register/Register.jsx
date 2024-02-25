import Footer from '../components/FooterFiles/Footer'
import Navbar from '../components/HeaderFiles/Navbar'
import RegisterForm from "../components/RegisterForm/RegisterForm"


function RegisterPage() {
    return(
        <section>
            <Navbar/>
            <RegisterForm/>
            <Footer/>
        </section>
        
        
    )
}

export default RegisterPage;