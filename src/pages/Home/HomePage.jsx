import './Home.css'
import Navbar from '../components/HeaderFiles/Navbar'
import MainContent from '../components/MainContent/MainContent'
import Footer from '../components/FooterFiles/Footer'

function HomePage() {
  return (
    <section>
      <Navbar/>
      <MainContent/>
      <Footer/>
    </section>
  )
}

export default HomePage;
