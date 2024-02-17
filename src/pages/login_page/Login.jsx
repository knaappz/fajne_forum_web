import './style.css'
import Navbar from '/src/pages/components/header/Navbar'
import Footer from '/src/pages/components/footer/Footer'
import LoginForm from './comp/LoginForm'


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