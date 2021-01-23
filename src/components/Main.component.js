import React from "react";
import { useLocation } from "react-router-dom";

const Main = (props) => {
        const location = useLocation();
        let language;

        // cant do props.match.param because some people may land on "/" instead of "/lt" or "/en"
        if (location.pathname.length > 2)
                language = location.pathname[1] + location.pathname[2];
        else
                language = "LT";


        return (

                < div style={{ height: 'inherit' }}>
                        {language === "LT" ? "KANYE WESTAS" : "KANYE WEST"}
                </div >
        );
}

export default Main;