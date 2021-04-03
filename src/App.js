import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import './App.css';

import Header from './components/Header.component';
import BcAndLanguages from './components/BcAndLanguages.component';
import Footer from './components/Footer.component';
import StickyFooter from './components/StickyFooter.component';
import Routes from './components/Routes.component';


function App() {
  // if the page is in english (red-room.lt/en), make the default language english.
  const [language, setLanguage] = useState(
    ((window.location.pathname[1] !== undefined && window.location.pathname[2] !== undefined) &&
      (window.location.pathname[1].toUpperCase() === 'E' && window.location.pathname[2].toUpperCase() === 'N')) ? "EN"
      : "LT");

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header language={language} />
      <div style={{ minHeight: '90vh', marginTop: '5rem' }}>
        <BcAndLanguages language={language} setLanguage={setLanguage} />
        <Routes language={language} />
      </div>

      {/* remove footer from small screen devices because it is unnecessary */}
      {(window.innerHeight > 1000 && window.innerWidth > 1000) && <Footer />}

      <StickyFooter language={language} />
    </BrowserRouter >
  );
};

export default App;
