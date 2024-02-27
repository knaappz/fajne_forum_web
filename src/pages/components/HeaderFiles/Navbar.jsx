import FajneForumLogo from '../NavbarLinks/Logo'
import Links from '../NavbarLinks/Links'
import './navbar.css'

function Navbar() {
    return(
        <section id='navigation'>
            <FajneForumLogo/>
            <Links/>
        </section>
    )
}

export default Navbar;