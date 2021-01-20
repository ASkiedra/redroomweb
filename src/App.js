import { BrowserRouter, Route, } from "react-router-dom";

import './App.css';

import Contacts from './components/Contacts.component';
import Navbar from './components/Navbar.component';
import Main from './components/Main.component';
import Gamintojai from './components/Manufacturers.component';
import BcAndLanguages from './components/BcAndLanguages.component';
import Footer from './components/Footer.component';
import Interior from './components/Interior.component';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />






      <div class='container'>
        <BcAndLanguages />
        <Route exact path='/' >
          <Main />
        </Route>
        <Route path='/manufacturers' exact component={Gamintojai} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/interior" exact component={Interior} />

        <Footer />


      </div>



    </BrowserRouter >
  );
};

export default App;
