import React from "react";
import {Helmet} from "react-helmet";

function Help(){
    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Help</title>
            </Helmet>

            <h1>This is the Help page</h1>
        </div>
    );
}

export default Help;
