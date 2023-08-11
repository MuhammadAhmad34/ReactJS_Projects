import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Home from './components/Home';
import Navbar from './components/Navbar';
import AOS from "aos";
import { useEffect } from 'react';
import "aos/dist/aos.css";
import ClientReviews from './components/ClientReviews'
import Services from './components/Services'
import BlogSection from './components/Blog'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (

    <>
      <Navbar />
      <div className="container mt-5" >
        <Home />
        <ClientReviews />
        <Services />
        <BlogSection />
        <FAQ />
      </div>
      <Footer />
    </>
  );
}

export default App;
