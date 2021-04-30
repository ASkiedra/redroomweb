import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom"

import Contacts from './Contacts';
import AllProducts from './AllProducts';
import Manufacturers from './Manufacturers';
import Interior from './Interior';
import MainPage from './MainPage';
import ProductPage from './ProductPage';
import Inquire from './Inquire';
import PrivacyPolicy from "./PrivacyPolicy";


const Routes = ({ language, setLanguage }) => {
    const location = useLocation();

    // scroll up on every route change
    useEffect(() => {
        const locationLanguage = location.pathname[1] + location.pathname[2];
        window.scrollTo(0, 0);

        // if the user clicks on a fullscreen image and then switches to another route
        if (document.getElementsByTagName("body")[0].classList.contains('setHeightLimit'))
            document.getElementsByTagName("body")[0].classList.remove('setHeightLimit')


        // changes the language if it changes in the url
        // if the location is longer or equal than three characters (for example: /en) and it doesnt match the props language
        if (location.pathname.length >= 3 && locationLanguage.toUpperCase() !== language.toUpperCase()) {
            if (locationLanguage === 'EN' || locationLanguage === 'LT')
                setLanguage(locationLanguage);
        }

    }, [location]);

    return (
        <Switch>
            {/* MainPage routes */}
            <Route exact path='/:lang' component={MainPage} />
            <Route exact path="/" component={MainPage} />


            {/* AllProducts routes */}
            <Route exact path="/:lang/products/:mainCategory/:subCategory/:manufacturer" component={AllProducts} />
            <Route exact path="/:lang/products/:mainCategory/:subCategory" component={AllProducts} />


            {/* case only mainCategory(e.g. from the dropdown) */}
            <Route exact path="/:lang/products/:mainCategory/" component={AllProducts} />

            {/* case only subCategory (e.g. from the dropdown) */}
            <Route exact path="/:lang/products//:subCategory" component={AllProducts} />

            {/* case only manufacturer (e.g. from the manufacturers page) */}
            <Route exact path="/:lang/products///:manufacturer" component={AllProducts} />

            <Route exact path="/:lang/products" component={AllProducts} />



            {/* Other routes */}
            <Route exact path="/:lang/products/:mainCategory/:subCategory/:manufacturer/:name/" component={ProductPage} />

            <Route exact path="/:lang/inquire" render={({ location }) => (<Inquire language={language} location={location} />)} />

            <Route exact path="/:lang/interior" component={Interior} />

            <Route exact path="/:lang/contacts">
                <Contacts language={language} />
            </Route>

            <Route exact path="/:lang/manufacturers">
                <Manufacturers language={language} />
            </Route>

            <Route exact path="/:lang/privacy policy">
                <PrivacyPolicy language={language} />
            </Route>


            {/* non route pages / 404 */}
            <Route path="*">
                <div style={{ height: 'inherit' }}>
                    <h1 style={{ marginTop: '10%', fontSize: '6rem', fontWeight: 'lighter', fontFamily: 'Roboto', textAlign: 'center', margin: '0 auto', width: '95%' }}>
                        {language === "LT" ? "Nėra tokio puslapio." : "This page doesn't exist."}
                    </h1>
                </div>
            </Route>
        </Switch >
    );
}

export default Routes;