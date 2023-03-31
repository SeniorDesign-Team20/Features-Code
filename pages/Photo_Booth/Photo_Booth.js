import React from "react";
import {Helmet} from "react-helmet";

function Photo_Booth(){
    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>PhotoBooth</title>
            </Helmet>

            <h1>This is the PhotoBooth page</h1>
        </div>
    );
}

export default Photo_Booth;
