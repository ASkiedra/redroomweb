import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import './App.css';

import Header from './components/Header.component';
import BcAndLanguages from './components/BcAndLanguages.component';
import Footer from './components/Footer.component';
import StickyFooter from './components/StickyFooter.component';
import Routes from './components/Routes.component';
function App() {

  // add a history save here
  const [language, setLanguage] = useState("LT");


  const setPathname = (pathname) => {
    console.log("**", pathname)
  }

 

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header language={language} />

      <div style={{minHeight: '90vh', marginTop: '5rem'}}>

        <BcAndLanguages language={language} setLanguage={setLanguage} />
        <Routes setPathname={setPathname} />

      </div>
      {/* remove footer from small screen devices because it is unnecessary */}
      {(window.innerHeight > 1000 && window.innerWidth > 1000) && <Footer />}

      <StickyFooter language={language} />





    </BrowserRouter >
  );
};

export default App;
