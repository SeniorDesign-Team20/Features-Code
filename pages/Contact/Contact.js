import React from "react";
import {Helmet} from "react-helmet";
//import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
//import {WebView} from 'react-native-webview';
//import HTML_FILE from './contact.html';


const source = {
    html: `
    <head>
        <meta charset="utf-8">
        <title>Contact Form</title>
    </head>
    <body>

        <form action="https://formsubmit.co/bennit6@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="New Contact From Customer">
            <input type="text" name="name" required>
            <input type="email" name="email" placeholder="Email Address" required>
            <input type="text" name="message" placeholder="Write your message here">
            <button type="submit">Send</button>
        </form>

    </body>`
};


function Contact(){
    const { width } = useWindowDimensions();
    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us</title>
            </Helmet>

            <div class="container">
                <div className='container'>
                    <h3 className="main-heading">Contact Us</h3>
                    <div className="underline mx-auto"></div>
                </div>
                <form target="_blank" action="https://formsubmit.co/bennit6@gmail.com" method="POST">
                    <input type="hidden" name="_subject" value="New Contact From Customer"/>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <input type="text" name="name" class="form-control" placeholder="Full Name" required/>
                            </div>
                            <div class="col">
                                <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
                    </div>
                    <input type="hidden" name="_template" value="table"></input>
                    <input type="hidden" name="_next" value="http://localhost:19006/thankyou"></input>
                    <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
