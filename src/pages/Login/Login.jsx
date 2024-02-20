import './style.css'
import Navbar from '/src/pages/components/header/Navbar'
import Footer from '/src/pages/components/footer/Footer'
import LoginForm from '/src/pages/components/LoginForm/LoginForm'


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