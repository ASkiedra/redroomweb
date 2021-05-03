import './App.css';
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import Footer, { StickyFooter } from './components/Footers';
import Routes from './components/Routes';
import FirstTimeBox from './components/FirstTimeBox';

export default function App() {
  // if the page is in english (red-room.lt/en), set the language to EN. otherwise LT
  const [language, setLanguage] = useState(
    // if language is defined in the url
    window.location.pathname[1] && window.location.pathname[2] &&
      window.location.pathname[1].toUpperCase() + window.location.pathname[2].toUpperCase() === 'EN' ?
      "EN" : "LT");

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {!localStorage.getItem('agreedToPP') && <FirstTimeBox language={language} />}

      <Header language={language} setLanguage={setLanguage} />

      <div id="main-container" style={{ minHeight: '90vh', marginTop: '5rem' }}>
        <Breadcrumbs language={language} setLanguage={setLanguage} />
        <Routes language={language} setLanguage={setLanguage} />
      </div>

      <Footer language={language} />
      <StickyFooter language={language} />
    </BrowserRouter >
  );
};
