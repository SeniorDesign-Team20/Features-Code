import React from 'react';
import {Link, BrowserRouter as Router} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";

import * as features from './../../selectedFeatures'
import {company_name, address, number, email, facebook, instagram, twitter} from './../../files_to_modify/company_info';
import './Footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        
        <Link to="/">
        <img src={require('./../../files_to_modify/logo.png')} alt={company_name} />
        </Link>
        
        

        <div className='social-container'>
            {instagram != "" && <a href= {instagram} className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>}
            {facebook != "" && <a href={facebook} className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>}
            {twitter != "" && <a href={twitter} className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>}
        </div>
      </div>

      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        {features.include_about && <Link to="/about">
            <p>Mission</p>
        </Link>}

        {features.include_people &&<Link to="/people">
            <p>People</p>
        </Link>}

        {features.include_careers && <Link to="/careers">
            <p>Careers</p>
        </Link>}

        {features.include_apply && <Link to="/apply">
            <p>Apply</p>
        </Link>}
      </div>

      <div className="gpt3__footer-links_div">
        <h4>Info</h4>
        {features.include_contact && <Link to="/contact">
        <p>Contact Us</p>
        </Link>}

        {features.include_faq && <Link to="/faq">
            <p>FAQs</p>
        </Link>}

        {features.include_hours && <Link to="/hours">
            <p>Hours of Operation</p>
        </Link>}

        {features.include_privacy && <Link to="/privacy">
        <p>Privacy Policy</p>
        </Link>}
      </div>

      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        {address != "" && <p>{address}</p>}
        {number != "" && <p>
            <a href= {'tel:' + number} className="phone contact">
                <FontAwesomeIcon icon={faPhone}/>
            </a>
            {" " + number}
        </p>}
        {email != "" && <p>
            <a href= {'mailto:' + email} className="mail contact">
                <FontAwesomeIcon icon={faEnvelope}/>
            </a> 
            {" " + email}
        </p>}
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 {company_name}. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;