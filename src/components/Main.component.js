import React, { Component } from "react";

import { useLocation } from 'react-router-dom'

    

const Main = () => {
    const location = useLocation();
    console.log(location.pathname);
    var xd = location.pathname;
    return (
                
        < div >
               
            </div >
        );
}

export default Main;