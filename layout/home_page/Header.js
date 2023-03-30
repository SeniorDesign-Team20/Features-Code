import React from 'react';
//import people from '../../assets/people.png';
import companyPhoto from './../../files_to_modify/logo.png';
import {home_header, home_description} from './../../files_to_modify/about_company';
import './header.css';

function Header () {
  return(
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">{home_header}</h1>
      <p>{home_description}</p>
    </div>

    <div className="gpt3__header-image">
      <img src={companyPhoto} />
    </div>
  </div>
  );
}

export default Header;