import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom"

import Contacts from '../components/Contacts.component';
import AllProducts from './AllProducts.component';
import Manufacturers from '../components/Manufacturers.component';
import Interior from '../components/Interior.component';
import MainPage from '../components/MainPage.component.js';
import ProductPage from '../components/ProductPage.component.js';
import Inquire from '../components/Inquire.component';


const Routes = () => {
    const location = useLocation();

    // scroll up on every route change
    useEffect(() => {
        if (document.getElementsByClassName('container')[0] !== undefined) {

            document.getElementsByClassName('container')[0].scrollTop = 0;
        }
    }, [location]);

    return (
        <Switch>

            <Route exact path='/:lang' component={MainPage} />
            <Route exact path="/" component={MainPage} />

            <Route exact path="/:lang/inquire" component={Inquire} />

            <Route exact path="/:lang/manufacturers" component={Manufacturers} />


            <Route exact path="/:lang/products/:mainCategory/:subCategory/:manufacturer" component={AllProducts} />
            <Route exact path="/:lang/products/:mainCategory/:subCategory" component={AllProducts} />

            {/* case only mainCategory(e.g. from the dropdown) */}
            <Route exact path="/:lang/products/:mainCategory/" component={AllProducts} />

            {/* case only subCategory (e.g. from the dropdown) */}
            <Route exact path="/:lang/products//:subCategory" component={AllProducts} />

            {/* case only manufacturer (e.g. from the dropdown) */}
            <Route exact path="/:lang/products///:manufacturer" component={AllProducts} />



            <Route exact path="/:lang/products/:mainCategory/:subCategory/:manufacturer/:name/" component={ProductPage} />

            <Route exact path="/:lang/products" component={AllProducts} />

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