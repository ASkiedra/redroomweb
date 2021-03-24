import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom"

import Contacts from '../components/Contacts.component';
import AllProducts from './AllProducts.component';
import Manufacturers from '../components/Manufacturers.component';
import Interior from '../components/Interior.component';
import MainPage from '../components/MainPage.component.js';
import ProductPage from '../components/ProductPage.component.js';
import Inquire from '../components/Inquire.component';
import Delivery from '../components/Delivery.component';


const Routes = (props) => {
    const location = useLocation();

    // scroll up on every route change
    useEffect(() => {
            window.scrollTo(0,0)
            
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
            <Route exact path="/:lang/delivery" component={Delivery} />

            {/* non route pages */}
            <Route path="*">
                < div style={{ height: 'inherit' }}>
                    <h1 style={{ marginTop: '10%', fontSize: '6rem', fontWeight: 'lighter', fontFamily: 'Roboto', textAlign: 'center', margin: '0 auto', width: '95%' }}>
                        {
                            props.language === "LT" ? "Nėra tokio puslapio." : "This page doesn't exist."
                        }
                    </h1>
                </div >
            </Route>
        </Switch>
    );
}

export default Routes;