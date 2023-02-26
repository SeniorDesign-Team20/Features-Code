import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Helmet} from "react-helmet";

import "./About.css"
import {about_company, vision, mission, values} from "../../files_to_modify/about_company"

function About(){
    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us</title>
            </Helmet>

            
            <section className="section bg-c-light border-bottom">
                <div className='container'>
                    <h3 className="main-heading">Our Company</h3>
                    <div className="underline mx-auto"></div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">{about_company}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-c-light border-top">
                <div className='container'>
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Mission, Vision, and Values</h3>
                            <div className="underline mx-auto"></div>
                            
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="card h-100">
                                    <div className="card-body">
                                        <h5 className="card-title">Mission</h5>
                                        <p className="card-text">{mission}</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card h-100">
                                    <div className="card-body">
                                        <h5 className="card-title">Vision</h5>
                                        <p className="card-text">{vision}</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card h-100">
                                    <div className="card-body">
                                        <h5 className="card-title">Values</h5>
                                        <p className="card-text">{values}</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    );
}

export default About;
