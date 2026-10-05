import './Home.css';
import Header from '../../components/Header';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
