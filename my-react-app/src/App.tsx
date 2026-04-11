import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Accueil from './components/Accueil';
import Informations from './components/Informations';
import Projets from './components/Projets';
import Contact from './components/Contact';
import Header from './components/general/Header';
import Footer from './components/general/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      
      <Header />
      
      <Routes>
        <Route path="/" element={<Accueil />}/>
        <Route path="/about" element={<Informations />}/>
        <Route path="/projets/:slug" element={<Projets />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>

      <Footer />
      
      </BrowserRouter>
    </>
  );
}

export default App;
