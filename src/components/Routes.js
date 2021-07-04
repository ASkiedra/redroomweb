import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import Contacts from './Contacts';
import AllProducts from './AllProducts';
import Manufacturers from './Manufacturers';
import Interior from './Interior';
import MainPage from './MainPage';
import ProductPage from './ProductPage';
import Inquire from './Inquire';
import PrivacyPolicy from './PrivacyPolicy';


const Routes = ({ SUPPORTED_LANGUAGES, language, setLanguage }) => {
    const location = useLocation();
console.log(language)
    // on every route change
    useEffect(() => {
        const locationLanguage = location.pathname[1] + location.pathname[2];
        const bodyClassList = document.getElementsByTagName('body')[0].classList;

        window.scrollTo(0, 0);

        // if the user was in fullscreen mode 
        if (bodyClassList.contains('setHeightLimit'))
            bodyClassList.remove('setHeightLimit')


        // changes the language if it changes in the url
        if (location.pathname.length >= 3 && locationLanguage.toUpperCase() !== language)
            SUPPORTED_LANGUAGES.includes(locationLanguage) && setLanguage(locationLanguage);

    }, [location]);

    return (
        <Switch>
            <Route exact path='/:lang' component={MainPage} />
            <Route exact path='/' component={MainPage} />


            <Route exact path='/:lang/products/:mainCategory/:subCategory/:manufacturer'
                component={AllProducts} />
            <Route exact path='/:lang/products/:mainCategory/:subCategory'
                component={AllProducts} />


            {/* only mainCategory(e.g. from the dropdown) */}
            <Route exact path='/:lang/products/:mainCategory/'
                component={AllProducts} />


            {/* only subCategory (e.g. from the dropdown) */}
            <Route exact path='/:lang/products//:subCategory'
                component={AllProducts} />


            {/* only manufacturer (e.g. from the manufacturers page) */}
            <Route exact path='/:lang/products///:manufacturer'
                component={AllProducts} />


            <Route exact path='/:lang/products'
                component={AllProducts} />


            <Route exact path='/:lang/products/:mainCategory/:subCategory/:manufacturer/:name/'
                render={({ match, location }) => <ProductPage match={match} location={location} language={language} />} />


            <Route exact path='/:lang/inquire'
                render={({ location }) => <Inquire language={language} location={location} />} />

            <Route exact path='/:lang/interior'
                component={Interior} />


            <Route exact path='/:lang/contacts'
                children={<Contacts language={language} />} />


            <Route exact path='/:lang/manufacturers'
                children={<Manufacturers language={language} />} />


            <Route exact path='/:lang/privacy policy'
                children={<PrivacyPolicy language={language} />} />


            <Route path='*'>
                <div id={'container-404'}>
                    <h1 children={language === 'LT' ? 'Nėra tokio puslapio.' : 'This page doesn\'t exist.'} />
                </div>
            </Route>
        </Switch >
    );
}

export default Routes;