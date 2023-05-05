import React from "react";
import {Helmet} from "react-helmet";
import {message_to_applicants, application_autoresponse} from './../../files_to_modify/application'
import {application_form_email} from "./../../files_to_modify/company_info"
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./Apply.css"


function Apply(){
    const domain = window.location.href; 
    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Apply Now</title>
            </Helmet>

            <div className="container">
                <div className='container'>
                    <h3 className="main-heading">Apply Now</h3>
                    <div className="underline mx-auto"></div>
                    <div className="card bg-warning">
                        <div className="card-body">
                            <p className="card-text">{message_to_applicants}</p>
                            <form target="_blank" action={"https://formsubmit.co/" + application_form_email} method="POST" encType="multipart/form-data">
                                <input type="hidden" name="_subject" value="New Job Application"/>
                                <div className="form-group">
                                    <div className="form-row">
                                        <div className="col">
                                            <div style={{fontSize: 30, textAlign: 'left'}}> Name </div>
                                            <input type="text" name="First Name" className="form-control" placeholder="First Name" required/>
                                            <input type="text" name="Last Name" className="form-control" placeholder="Last Name" required/>
                                        </div>
                                        <div className="col">
                                            <div style={{fontSize: 30, textAlign: 'left'}}> Address </div>
                                            <input type="text" name="Street Address" className="form-control" placeholder="Street Address" required/>
                                            <input type="text" name="City" className="form-control" placeholder="City" required/>
                                            <input type="text" name="City" className="form-control" placeholder="State" required/>
                                            <input type="text" name="City" className="form-control" placeholder="Zip Code" required/>
                                        </div>
                                        <div className="col">
                                            <div style={{fontSize: 30, textAlign: 'left'}}> Contact Information </div>
                                            <input type="email" name="email" className="form-control" placeholder="Email Address" required/>
                                            <input type="text" name="Phone Number" className="form-control" placeholder="Phone Number" required/>
                                        </div>
                                        <div className="col">
                                            <div style={{fontSize: 30, textAlign: 'left'}}> Position and Location </div>
                                            <input type="text" name="Desired Position" className="form-control" placeholder="Desired Postition" required/>
                                            <input type="text" name="Desired Location" className="form-control" placeholder="Desired Location" required/>
                                        </div>
                                        <div className="col">
                                            <div style={{fontSize: 30, textAlign: 'left'}}> Resume </div>
                                            <input type="file" name="attachment" required></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Comments" className="form-control" name="Comments" rows="10"></textarea>
                                </div>
                                <input type="hidden" name="_template" value="table"></input>
                                <input type="hidden" name="_next" value={domain + "/thankyou"}></input>
                                <input type="hidden" name="_autoresponse" value={application_autoresponse}></input>
                                <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Apply;
