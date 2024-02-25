import './Home.css'
import Navbar from '../components/Header/Navbar'
import MainContent from '../components/MainContent/MainContent'
import Footer from '../components/Footer/Footer'

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
