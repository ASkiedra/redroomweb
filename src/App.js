import { BrowserRouter, Route, } from "react-router-dom";

import './App.css';

import Contacts from './components/contacts.component';
import Navbar from './components/navbar.component';
import Main from './components/Main.component';
import Gamintojai from './components/gamintojai.component';
import BcAndLanguages from './components/bcAndLanguages.component';
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />






      <div class='container'>
        <BcAndLanguages />
        <Route exact path='/' >
          <Main />
        </Route>
        <Route path='/gamintojai' exact component={Gamintojai} />
        <Route path="/kontaktai" exact component={Contacts} />

      </div>




    </BrowserRouter >
  );
};

export default App;
