import React from "react";
import {Helmet} from "react-helmet";

function File_Upload(){
    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Upload File</title>
            </Helmet>

            <h1>This is the File Upload page</h1>
        </div>
    );
}

export default File_Upload;
