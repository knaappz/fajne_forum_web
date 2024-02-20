import Navbar from '/src/pages/components/header/Navbar'
import Footer from '/src/pages/components/footer/Footer'
import RegisterForm from '/src/pages/components/RegisterForm/RegisterForm'


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