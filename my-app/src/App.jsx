import { Routes, Route } from 'react-router-dom';
import Navbar from './components/sections/Navbar.jsx';
import Home from './components/pages/Home.jsx';
import AboutPage from './components/pages/AboutPage.jsx';
import ServicesPage from './components/pages/ServicesPage.jsx';
import Contact from './components/pages/Contact.jsx';
import Footer from './components/sections/Footer.jsx';
import './App.css';


export default function App() {
  return (
    <>
      <Navbar /> 
      <main>
        <Routes>
           <Route path="/" element={<Home />} />          
           <Route path="/about" element={<AboutPage />} /> 
           <Route path="/services" element={<ServicesPage />} />
           <Route path="/contact" element={<Contact />} /> 
        </Routes>        
      </main>
      <Footer /> 
    </>
  );
}
