import React from "react";
import {Helmet} from "react-helmet";

function Map(){
    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Map</title>
            </Helmet>

            <h1>This is the Map page</h1>
        </div>
    );
}

export default Map;