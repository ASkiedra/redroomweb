import './App.css';
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import Footer, { StickyFooter } from './components/Footers';
import Routes from './components/Routes';
import WelcomeContainer from './components/WelcomeContainer';

export default function App() {
  // if the page is in english (red-room.lt/en), set the language to EN. otherwise LT
  const [language, setLanguage] = useState(
    // if language is defined in the url
    window.location.pathname[1] && window.location.pathname[2] &&
      window.location.pathname[1].toUpperCase() + window.location.pathname[2].toUpperCase() === 'EN' ?
      "EN" : "LT");

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header language={language} />

      <div id="main-container" style={{ minHeight: '90vh', marginTop: '5rem' }}>
        {/* <WelcomeContainer language={language} setLanguage={setLanguage} /> */}
        <Breadcrumbs language={language} setLanguage={setLanguage} />
        <Routes language={language} setLanguage={setLanguage} />
      </div>

      {/* remove footer from small screen devices because it is unnecessary */}
      {window.innerHeight > 650 && window.innerWidth > 500 && <Footer language={language} />}

      <StickyFooter language={language} />
    </BrowserRouter >
  );
};
