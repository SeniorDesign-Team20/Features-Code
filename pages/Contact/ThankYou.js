import React from "react";
import {Helmet} from "react-helmet";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { thank_you_message } from "../../files_to_modify/thank_you";

function ThankYou(){
    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Thank You</title>
            </Helmet>

            <section className="section bg-c-light border-bottom">
                <div className='container'>
                    <h3 className="main-heading">Thank You</h3>
                    <div className="underline mx-auto"></div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">{thank_you_message}</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default ThankYou;