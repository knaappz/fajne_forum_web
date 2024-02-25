import './Home.css'
import Navbar from '../components/header/Navbar'
import MainContent from '../components/MainContent/MainContent'
import Footer from '../components/footer/Footer'

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
