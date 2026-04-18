import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Accueil from './components/Accueil.tsx';
import Informations from './components/Informations.tsx';
import Projets from './components/projets/Projets.tsx';
import Contact from './components/Contact.tsx';
import Header from './components/general/Header.tsx';
import Footer from './components/general/Footer.tsx';

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
