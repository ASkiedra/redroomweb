import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import './App.css';

import Header from './components/Header.component';
import BcAndLanguages from './components/BcAndLanguages.component';
import Footer from './components/Footer.component';
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






      <div className='container'>
        <BcAndLanguages language={language} setLanguage={setLanguage} />

        <Routes setPathname={setPathname} />



        <Footer language={language} />


      </div>



    </BrowserRouter >
  );
};

export default App;
