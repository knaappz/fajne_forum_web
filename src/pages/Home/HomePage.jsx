import './Home.css'
import Navbar from '/src/pages/components/header/Navbar'
import MainContent from '../components/main_content/MainContent'
import Footer from '/src/pages/components/footer/Footer'

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
