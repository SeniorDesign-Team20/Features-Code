import React from "react";
import {Helmet} from "react-helmet";
import {contact_form_email} from "./../../files_to_modify/company_info"
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Contact.css'


function Contact(){
    const domain = window.location.href; 
    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us</title>
            </Helmet>

            <div className="container">
                <div className='container'>
                    <h3 className="main-heading">Contact Us</h3>
                    <div className="underline mx-auto"></div>
                </div>
                <form target="_blank" action={"https://formsubmit.co/" + contact_form_email} method="POST">
                    <input type="hidden" name="_subject" value="New Contact From Customer"/>
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" name="name" className="form-control" placeholder="Full Name" required/>
                            </div>
                            <div className="col">
                                <input type="email" name="email" className="form-control" placeholder="Email Address" required/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
                    </div>
                    <input type="hidden" name="_template" value="table"></input>
                    <input type="hidden" name="_next" value={domain + "/thankyou"}></input>
                    <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
