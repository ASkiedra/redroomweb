import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import Footer, { StickyFooter } from './components/Footers';
import Routes from './components/Routes';
import FirstTimeBox from './components/FirstTimeBox';

export default function App() {
  const [language, setLanguage] = useState(window.location.pathname.toUpperCase().indexOf('EN') === 1 ? 'EN' : 'LT');
  const SUPPORTED_LANGUAGES = ['EN', 'LT'];

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {!localStorage.getItem('agreedToPP') && <FirstTimeBox language={language} />}

      <Header language={language} setLanguage={setLanguage} />

      <div id='main-container'>
        <Breadcrumbs language={language} setLanguage={setLanguage} />
        
        <Routes
         SUPPORTED_LANGUAGES={SUPPORTED_LANGUAGES} 
         language={language} 
         setLanguage={setLanguage} 
        />
      </div>

      <Footer language={language} />
      <StickyFooter language={language} />
    </BrowserRouter >
  );
};
