import { BrowserRouter } from "react-router-dom";

import './App.css';

import Navbar from './components/Navbar.component';
import BcAndLanguages from './components/BcAndLanguages.component';
import Footer from './components/Footer.component';
import GoToTop from './components/GoToTop.component';
import Routes from './components/Routes.component';

function App() {
  
  const setPathname = (pathname) => {
    console.log("**", pathname)
}


  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />






      <div class='container'>
        <GoToTop />
        <BcAndLanguages />

        <Routes setPathname={setPathname}/>

       

        <Footer />


      </div>



    </BrowserRouter >
  );
};

export default App;
