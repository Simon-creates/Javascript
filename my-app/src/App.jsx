import { Routes, Route } from 'react-router-dom';
import Navbar from './components/sections/Navbar.jsx';
import Home from './components/pages/Home.jsx';
import AboutPage from './components/pages/AboutPage.jsx';
import './App.css';


export default function App() {
  return (
    <>
      <Navbar /> 
      <main>
        <Routes>
           <Route path="/" element={<Home />} />          
           <Route path="/about" element={<AboutPage />} /> 
        </Routes>        
      </main>
    </>
  );
}
