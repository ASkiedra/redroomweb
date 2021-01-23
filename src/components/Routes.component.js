import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom"

import Contacts from '../components/Contacts.component';
import Main from '../components/Main.component';
import Manufacturers from '../components/Manufacturers.component';
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
            <Route exact path='/:lang' exact component={Main} />
            <Route exact path="/" exact component={Main}/>

            <Route exact path="/:lang/manufacturers" exact component={Manufacturers} />
            <Route exact path="/:lang/contacts" exact component={Contacts} />
            <Route exact path="/:lang/interior" exact component={Interior} />

            {/* non route pages */}
            <Route path="*">
                < div style={{ height: 'inherit' }}>
                    <h1>404</h1>
                </div >
            </Route>
        </Switch>
    );
}

export default Routes;