import Navbar from '/src/pages/components/header/Navbar'
import Footer from '/src/pages/components/footer/Footer'
import RegisterForm from './comp/RegisterForm'

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