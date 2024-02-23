import Navbar from '/src/pages/components/header/Navbar'
import Footer from '/src/pages/components/footer/Footer'
import ResetForm from '/src/pages/components/ResetForm/ResetForm'

function ResetPassword() {
    return(
        <section>
            <Navbar/>
            <ResetForm/>
            <Footer/>
        </section>
        
        
    )
}

export default ResetPassword;