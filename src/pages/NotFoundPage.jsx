import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <section id="nopagesection">
             <div className="nopage">
                <img src="https://data4.cupsell.pl/upload/generator/250608/640x420/3993798_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235" alt="pepe tu był ale umarł" />
                Nie ma takiej strony przyjacielu, <br></br> 
                <Link to='/'><span><b>wracaj na główną.</b></span></Link></div>
        </section>
   
    )
}