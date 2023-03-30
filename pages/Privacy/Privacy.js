import React from "react";
import {Helmet} from "react-helmet";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./privacy.css"
import { privacy_policy } from "../../files_to_modify/about_company";

function Privacy(){
    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Privacy Policy</title>
            </Helmet>

            <section className="section bg-c-light border-bottom">
                <div className='container'>
                    <h3 className="main-heading">Privacy Policy</h3>
                    <div className="underline mx-auto"></div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">{privacy_policy}</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Privacy;