import './Home.css'
import Navbar from '/src/pages/components/Header/Navbar'
import MainContent from '../components/MainContent/MainContent'
import Footer from '/src/pages/components/Footer/Footer'

function HomePage() {
  return (
    <section>
      <Navbar/>
      {/* Konto */}
      {/* Kategorie */}
      {/* Moje opinie */}
      <MainContent/>
      <Footer/>
    </section>
  )
}

export default HomePage;
