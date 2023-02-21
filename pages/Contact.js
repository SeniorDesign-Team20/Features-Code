import React from "react";
import {Helmet} from "react-helmet";

function Contact(){
    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us</title>
            </Helmet>

            <h1>This is the Contact page</h1>
        </div>
    );
}

export default Contact;
