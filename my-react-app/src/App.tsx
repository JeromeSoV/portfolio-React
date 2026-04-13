import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Accueil from './components/Accueil.js';
import Informations from './components/Informations.js';
import Projets from './components/projets/Projets.js';
import Contact from './components/Contact.js';
import Header from './components/general/Header.js';
import Footer from './components/general/Footer.js';

function App() {
  return (
    <>
      <BrowserRouter>
      
      <Header />
      
      <Routes>
        <Route path="/" element={<Accueil />}/>
        <Route path="/about" element={<Informations />}/>
        <Route path="/projets/:slug?" element={<Projets />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>

      <Footer />
      
      </BrowserRouter>
    </>
  );
}

export default App;
