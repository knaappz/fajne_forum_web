import './maincontent.css'
import Games from './comp/Games'
import Books from './comp/Books'
import Films from './comp/Films'


function MainContent() {
    return(
        <section id='maincontent'>
            <Games/>
            <Books/>
            <Films/>
        </section>
    )
}

export default MainContent;
