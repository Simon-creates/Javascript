import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Hero from './components/Hero.jsx';
import './App.css';


export default function App() {
  return (
    <>
      <Navbar /> 
      <main>
        <Routes>
            <Route path="/" element={<Hero />} />
            
        </Routes>        
      </main>
    </>
  );
}
