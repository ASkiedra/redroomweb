import './App.css';
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import Header from './components/Header.component';
import BcAndLanguages from './components/BcAndLanguages.component';
import Footer from './components/Footer.component';
import StickyFooter from './components/StickyFooter.component';
import Routes from './components/Routes.component';

export default function App() {
  // if the page is in english (red-room.lt/en), make the default language english.
  const [language, setLanguage] = useState(
    // if language is defined in the url
    window.location.pathname[1] && window.location.pathname[2] &&
      window.location.pathname[1].toUpperCase() + window.location.pathname[2].toUpperCase() === 'EN' ?
      "EN" : "LT");

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header language={language} />

      <div id="main-container" style={{ minHeight: '90vh', marginTop: '5rem' }}>
        <BcAndLanguages language={language} setLanguage={setLanguage} />
        <Routes language={language} setLanguage={setLanguage} />
      </div>

      {/* remove footer from small screen devices because it is unnecessary */}
      {window.innerHeight > 650 && window.innerWidth > 500 && <Footer language={language} />}

      <StickyFooter language={language} />
    </BrowserRouter >
  );
};
