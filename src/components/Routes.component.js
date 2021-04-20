import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom"

import Contacts from '../components/Contacts.component';
import AllProducts from './AllProducts.component';
import Manufacturers from '../components/Manufacturers.component.js';
import Interior from '../components/Interior.component.js';
import MainPage from '../components/MainPage.component.js';
import ProductPage from '../components/ProductPage.component.js';
import Inquire from '../components/Inquire.component.js';
import Delivery from '../components/Delivery.component.js';


const Routes = (props) => {
    const location = useLocation();

    // scroll up on every route change
    useEffect(() => {
        const locationLanguage = location.pathname[1] + location.pathname[2];
        window.scrollTo(0, 0)

        // if the user clicks on an itnerior image and then switches to another route
        if (location.pathname.indexOf('interior') === -1 && document.getElementsByTagName("body")[0].classList.contains('setHeightLimit'))
            document.getElementsByTagName("body")[0].classList.remove('setHeightLimit')


        // changes the language if it changes in the url
        // if the location is longer or equal than three characters (for example: /en) and it doesnt match the props language
        if (location.pathname.length >= 3 && locationLanguage.toUpperCase() !== props.language.toUpperCase())
            if (locationLanguage === 'EN' || locationLanguage === 'LT')
                props.setLanguage(locationLanguage);

    }, [location]);

    return (
        <Switch>
            {/* MainPage routes */}
            <Route exact path='/:lang' language={props.language} component={MainPage} />
            <Route exact path="/" language={props.language} component={MainPage} />


            {/* AllProductsRoutes */}
            <Route exact path="/:lang/products/:mainCategory/:subCategory/:manufacturer" component={AllProducts} />
            <Route exact path="/:lang/products/:mainCategory/:subCategory" component={AllProducts} />

            {/* case only mainCategory(e.g. from the dropdown) */}
            <Route exact path="/:lang/products/:mainCategory/" component={AllProducts} />

            {/* case only subCategory (e.g. from the dropdown) */}
            <Route exact path="/:lang/products//:subCategory" component={AllProducts} />

            {/* case only manufacturer (e.g. from the dropdown) */}
            <Route exact path="/:lang/products///:manufacturer" component={AllProducts} />

            <Route exact path="/:lang/products" component={AllProducts} />

            {/* Other routes */}
            <Route exact path="/:lang/products/:mainCategory/:subCategory/:manufacturer/:name/" component={ProductPage} />
            <Route exact path="/:lang/contacts" component={Contacts} />
            <Route exact path="/:lang/interior" component={Interior} />
            <Route exact path="/:lang/delivery" component={Delivery} />
            <Route exact path="/:lang/inquire" component={Inquire} />
            <Route exact path="/:lang/manufacturers" component={Manufacturers} />

            {/* non route pages / 404 */}
            <Route path="*">
                <div style={{ height: 'inherit' }}>
                    <h1 style={{ marginTop: '10%', fontSize: '6rem', fontWeight: 'lighter', fontFamily: 'Roboto', textAlign: 'center', margin: '0 auto', width: '95%' }}>
                        {props.language === "LT" ? "Nėra tokio puslapio." : "This page doesn't exist."}
                    </h1>
                </div>
            </Route>
        </Switch>
    );
}

export default Routes;