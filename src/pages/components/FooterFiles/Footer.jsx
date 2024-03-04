import './footer.css'
import Logo from '../NavbarLinks/Logo'

function Footer() {
    return(
    
    <>
        <section id="footer">
            
            <div className='material'>
                <Logo/>
                
                <ul>
                    <p>Nw po co tu <br></br> paczysz ale masz:</p>
                    <li>O nas</li>
                    <li>Kontakt</li>
                    <li>Regulamin</li>
                    <li>Polityka prywatności</li>
                </ul>

                
                
            </div>

        <p className='copy'>Copyright © <span>FajneForum</span> 2024</p>

        </section>
    </>
        
    )
    
}

export default Footer;
