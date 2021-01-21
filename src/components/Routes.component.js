import React, { useEffect } from "react";
import {  Route, Switch, useLocation } from "react-router-dom"

import Contacts from '../components/Contacts.component';
import Main from '../components/Main.component';
import Gamintojai from '../components/Manufacturers.component';
import Interior from '../components/Interior.component';

const Routes = () => {
    const location = useLocation();

    // scroll up on every route change
    useEffect(() => {
        if (document.getElementsByClassName('container')[0] !== undefined) 
            document.getElementsByClassName('container')[0].scrollTop = 0;
    }, [location]);

    return (
        <Switch>
            <Route exact path='/' >
                <Main />
            </Route>
            <Route path='/manufacturers' exact component={Gamintojai} />
            <Route path="/contacts" exact component={Contacts} />
            <Route path="/interior" exact component={Interior} />

        </Switch>
    );
}

export default Routes;