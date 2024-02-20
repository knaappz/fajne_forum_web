import FajneForumLogo from './comp/Logo'
import Links from './comp/Links'
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