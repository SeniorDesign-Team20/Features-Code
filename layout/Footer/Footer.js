import React from 'react';
import {Link, BrowserRouter as Router} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";

import {include_contact, include_careers, include_people, include_faq} from './../../selectedFeatures'
import {company_name, address, number, email, facebook, instagram, twitter} from './../../files_to_modify/company_info';
import './Footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        
        <Link to="/">
        <img src={require('./../../files_to_modify/logo.png')} alt={company_name} />
        </Link>
        
        <p>{address}, <br /> All Rights Reserved</p>

        <div className='social-container'>
            <a href= {instagram} className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href={facebook} className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href={twitter} className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
        </div>
      </div>

      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <Link to="/about">
            <p>Mission</p>
        </Link>

        {include_people &&<Link to="/people">
            <p>People</p>
        </Link>}

        {include_careers && <Link to="/careers">
            <p>Careers</p>
        </Link>}
      </div>

      <div className="gpt3__footer-links_div">
        <h4>Info</h4>
        {include_contact && <Link to="/contact">
        <p>Contact Us</p>
        </Link>}

        {include_faq && <Link to="/faq">
            <p>FAQs</p>
        </Link>}

        <Link to="/privacy">
        <p>Privacy Policy</p>
        </Link>
      </div>

      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>{address}</p>
        <p>
            <a href= {'tel:' + number} className="phone contact">
                <FontAwesomeIcon icon={faPhone}/>
            </a>
            {" " + number}
        </p>
        <p>
            <a href= {'mailto:' + email} className="mail contact">
                <FontAwesomeIcon icon={faEnvelope}/>
            </a> 
            {" " + email}
        </p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 {company_name}. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;