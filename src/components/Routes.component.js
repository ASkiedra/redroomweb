import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom"

import Contacts from '../components/Contacts.component';
import Products from './Products.component';
import Manufacturers from '../components/Manufacturers.component';
import Interior from '../components/Interior.component';
import MainContainer from '../components/MainContainer.component.js';

const Routes = () => {
    const location = useLocation();
    // scroll up on every route change
    useEffect(() => {
        if (document.getElementsByClassName('container')[0] !== undefined)
            document.getElementsByClassName('container')[0].scrollTop = 0;
    }, [location]);

    return (
        <Switch>
            <Route exact path='/:lang' component={MainContainer}/>
            <Route exact path="/" component={MainContainer}  />

            <Route exact path="/:lang/manufacturers" component={Manufacturers} />
            {/* mainCategory: day systems, type: sofas */}
            <Route exact path="/:lang/products/:mainCategory/:type/:manufacturer" component={Products} />

            {/* case no manufacturer */}
            <Route exact path="/:lang/products/:mainCategory/:type//:productcode/:productname/" />
            
            {/* case only mainCategory(e.g. from the dropdown) */}
            <Route exact path="/:lang/products/:mainCategory/" component={Products}/>


            <Route exact path="/:lang/products/:mainCategory/:type/:manufacturer/:productcode/:productname/" />
            <Route exact path="/:lang/products/:mainCategory/:type/:manufacturer/:productcode/:productname/:productcolor" />

            <Route exact path="/:lang/products"  component={Products} />

            <Route exact path="/:lang/contacts" component={Contacts} />
            <Route exact path="/:lang/interior" component={Interior} />

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